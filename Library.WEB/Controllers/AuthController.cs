using System.Security.Claims;
using System.Threading.Tasks;
using Library.DAL.Models;
using Library.WEB.Auth;
using Library.WEB.Helpers;
using Library.WEB.IdentityView;
using Library.WEB.IdentityView.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Library.WEB.Controllers
{
  [Route("api/[controller]")]
  public class AuthController : Controller
  {
    private readonly UserManager<AppUser> _userManager;
    private readonly IJwtFactory _jwtFactory;
    private readonly JwtIssuerOptions _jwtOptions;

    public AuthController(UserManager<AppUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
    {
      _userManager = userManager;
      _jwtFactory = jwtFactory;
      _jwtOptions = jwtOptions.Value;
    }

    // POST api/auth/login
    [HttpPost("login")]
    public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
      if (identity == null)
      {
        return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
      }

      var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, credentials.UserName, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
      return new OkObjectResult(jwt);
    }

    private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
    {
      if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
        return await Task.FromResult<ClaimsIdentity>(null);

      // get the user to verifty
      var userToVerify = await _userManager.FindByNameAsync(userName);

      if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

      // check the credentials
      if (await _userManager.CheckPasswordAsync(userToVerify, password))
      {
        return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
      }

      // Credentials are invalid, or account doesn't exist
      return await Task.FromResult<ClaimsIdentity>(null);
    }
  }
}





//using Library.DAL.Models;
//using Library.DAL.Options;
//using Library.ViewModels.Models;
//using Library.WEB.Auth;
//using Library.WEB.Helpers;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Options;
//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Security.Claims;
//using System.Threading.Tasks;

//namespace Library.WEB.Controllers
//{
//  [Route("api/[controller]")]
//  public class AuthController : Controller
//  {
//    private readonly UserManager<AppUser> _userManager;
//    private readonly IJwtFactory _jwtFactory;
//    private readonly JsonSerializerSettings _serializerSettings;
//    private readonly JwtIssuerOptions _jwtOptions;

//    public AuthController(UserManager<AppUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
//    {
//      _userManager = userManager;
//      _jwtFactory = jwtFactory;
//      _jwtOptions = jwtOptions.Value;

//      _serializerSettings = new JsonSerializerSettings
//      {
//        Formatting = Formatting.Indented
//      };
//    }

//    [HttpPost("login")]
//    public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
//    {
//      if (!ModelState.IsValid)
//      {
//        return BadRequest(ModelState);
//      }

//      var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
//      if (identity == null)
//      {
//        return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
//      }

//      // Serialize and return the response
//      var response = new
//      {
//        id = identity.Claims.Single(c => c.Type == "id").Value,
//        auth_token = await _jwtFactory.GenerateEncodedToken(credentials.UserName, identity),
//        expires_in = (int)_jwtOptions.ValidFor.TotalSeconds
//      };

//      var json = JsonConvert.SerializeObject(response, _serializerSettings);
//      return new OkObjectResult(json);
//    }

//    private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
//    {
//      if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(password))
//      {
//        // get the user to verifty
//        var userToVerify = await _userManager.FindByNameAsync(userName);

//        if (userToVerify != null)
//        {
//          // check the credentials  
//          if (await _userManager.CheckPasswordAsync(userToVerify, password))
//          {
//            return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
//          }
//        }
//      }

//      // Credentials are invalid, or account doesn't exist
//      return await Task.FromResult<ClaimsIdentity>(null);
//    }

//  }
//}
