﻿// <auto-generated />
using Library.DAL;
using Library.ViewModels.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Library.DAL.Migrations
{
    [DbContext(typeof(LibraryContext))]
    partial class LibraryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Library.DAL.Models.Book", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName");

                    b.Property<string>("Name");

                    b.Property<int>("Type");

                    b.Property<int>("YearOfPublishing");

                    b.HasKey("BookId");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("Library.DAL.Models.BookPublicHouse", b =>
                {
                    b.Property<int>("BookId");

                    b.Property<int>("PublicHouseId");

                    b.HasKey("BookId", "PublicHouseId");

                    b.HasIndex("PublicHouseId");

                    b.ToTable("BookPublicHouses");
                });

            modelBuilder.Entity("Library.DAL.Models.Brochure", b =>
                {
                    b.Property<int>("BrochureId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("NumberOfPages");

                    b.Property<int>("Type");

                    b.Property<string>("TypeOfCover");

                    b.HasKey("BrochureId");

                    b.ToTable("Brochures");
                });

            modelBuilder.Entity("Library.DAL.Models.Magazine", b =>
                {
                    b.Property<int>("MagazineId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName");

                    b.Property<string>("Name");

                    b.Property<int>("Type");

                    b.Property<int>("YearOfPublishing");

                    b.HasKey("MagazineId");

                    b.ToTable("Magazines");
                });

            modelBuilder.Entity("Library.DAL.Models.PublicHouse", b =>
                {
                    b.Property<int>("PublicHouseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Country");

                    b.Property<string>("PublicHouseName");

                    b.HasKey("PublicHouseId");

                    b.ToTable("PublicHouses");
                });

            modelBuilder.Entity("Library.DAL.Models.BookPublicHouse", b =>
                {
                    b.HasOne("Library.DAL.Models.Book", "Book")
                        .WithMany("BookPublicHouses")
                        .HasForeignKey("BookId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Library.DAL.Models.PublicHouse", "PublicHouse")
                        .WithMany("BookPublicHouses")
                        .HasForeignKey("PublicHouseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
