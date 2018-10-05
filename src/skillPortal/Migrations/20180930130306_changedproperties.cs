using Microsoft.EntityFrameworkCore.Migrations;

namespace skillPortal.Migrations
{
    public partial class changedproperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Questions",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Questions",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Files",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Files",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Exams",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Exams",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Categories",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Categories",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AspNetUsers",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AspNetUsers",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AspNetRoles",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AspNetRoles",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AppProducts",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AppProducts",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AppProductCategories",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AppProductCategories",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AppOrders",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AppOrders",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AppOrderDetails",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AppOrderDetails",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "AppCustomers",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "AppCustomers",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Answers",
                newName: "Updated");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Answers",
                newName: "Created");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "Questions",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Questions",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "Files",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Files",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "Exams",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Exams",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "Categories",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Categories",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AspNetUsers",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AspNetUsers",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AspNetRoles",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AspNetRoles",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AppProducts",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AppProducts",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AppProductCategories",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AppProductCategories",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AppOrders",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AppOrders",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AppOrderDetails",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AppOrderDetails",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "AppCustomers",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "AppCustomers",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated",
                table: "Answers",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Answers",
                newName: "CreatedDate");
        }
    }
}
