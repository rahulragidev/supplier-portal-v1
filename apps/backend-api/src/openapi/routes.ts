import { createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import * as schemas from "./schemas.js";

// User routes
export const getUsersRoute = createRoute({
  method: "get",
  path: "/users",
  tags: ["Users"],
  summary: "Get all users",
  description: "Retrieve a list of all non-deleted users\n\nRequired Permission: `users:list`",
  responses: {
    200: {
      description: "List of users",
      content: {
        "application/json": {
          schema: schemas.UserListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getUserByIdRoute = createRoute({
  method: "get",
  path: "/users/{uid}",
  tags: ["Users"],
  summary: "Get user by ID",
  description:
    "Retrieve a specific user by their unique identifier\n\nRequired Permission: `users:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "User details",
      content: {
        "application/json": {
          schema: schemas.UserSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createUserRoute = createRoute({
  method: "post",
  path: "/users",
  tags: ["Users"],
  summary: "Create a new user",
  description: "Create a new user with the provided data\n\nRequired Permission: `users:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateUserSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "User created successfully",
      content: {
        "application/json": {
          schema: schemas.UserSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateUserRoute = createRoute({
  method: "put",
  path: "/users/{uid}",
  tags: ["Users"],
  summary: "Update a user",
  description:
    "Update an existing user with the provided data\n\nRequired Permission: `users:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateUserSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "User updated successfully",
      content: {
        "application/json": {
          schema: schemas.UserSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteUserRoute = createRoute({
  method: "delete",
  path: "/users/{uid}",
  tags: ["Users"],
  summary: "Delete a user",
  description:
    "Soft delete a user by their unique identifier\n\nRequired Permission: `users:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "User deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Organization routes
export const getOrganizationsRoute = createRoute({
  method: "get",
  path: "/organizations",
  tags: ["Organizations"],
  summary: "Get all organizations",
  description:
    "Retrieve a list of all non-deleted organizations\n\nRequired Permission: `organizations:list`",
  responses: {
    200: {
      description: "List of organizations",
      content: {
        "application/json": {
          schema: schemas.OrganizationListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getOrganizationByIdRoute = createRoute({
  method: "get",
  path: "/organizations/{uid}",
  tags: ["Organizations"],
  summary: "Get organization by ID",
  description:
    "Retrieve a specific organization by its unique identifier\n\nRequired Permission: `organizations:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Organization details",
      content: {
        "application/json": {
          schema: schemas.OrganizationSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Organization not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createOrganizationRoute = createRoute({
  method: "post",
  path: "/organizations",
  tags: ["Organizations"],
  summary: "Create a new organization",
  description:
    "Create a new organization with the provided data\n\nRequired Permission: `organizations:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateOrganizationSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Organization created successfully",
      content: {
        "application/json": {
          schema: schemas.OrganizationSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateOrganizationRoute = createRoute({
  method: "put",
  path: "/organizations/{uid}",
  tags: ["Organizations"],
  summary: "Update an organization",
  description:
    "Update an existing organization with the provided data\n\nRequired Permission: `organizations:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateOrganizationSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Organization updated successfully",
      content: {
        "application/json": {
          schema: schemas.OrganizationSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Organization not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteOrganizationRoute = createRoute({
  method: "delete",
  path: "/organizations/{uid}",
  tags: ["Organizations"],
  summary: "Delete an organization",
  description:
    "Soft delete an organization by its unique identifier\n\nRequired Permission: `organizations:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Organization deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Organization not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Employee routes
export const getEmployeesRoute = createRoute({
  method: "get",
  path: "/employees",
  tags: ["Employees"],
  summary: "Get all employees",
  description:
    "Retrieve a list of all non-deleted employees\n\nRequired Permission: `employees:list`",
  responses: {
    200: {
      description: "List of employees",
      content: {
        "application/json": {
          schema: schemas.EmployeeListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getEmployeeByIdRoute = createRoute({
  method: "get",
  path: "/employees/{userUid}",
  tags: ["Employees"],
  summary: "Get employee by ID",
  description:
    "Retrieve a specific employee by their unique identifier\n\nRequired Permission: `employees:get-by-id`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Employee details",
      content: {
        "application/json": {
          schema: schemas.EmployeeSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Employee not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getEmployeesByOrganizationRoute = createRoute({
  method: "get",
  path: "/organizations/{orgUid}/employees",
  tags: ["Employees"],
  summary: "Get employees by organization",
  description:
    "Retrieve all employees belonging to a specific organization\n\nRequired Permission: `employees:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of employees in the organization",
      content: {
        "application/json": {
          schema: schemas.EmployeeListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createEmployeeRoute = createRoute({
  method: "post",
  path: "/employees",
  tags: ["Employees"],
  summary: "Create a new employee",
  description:
    "Create a new employee with the provided data\n\nRequired Permission: `employees:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateEmployeeSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Employee created successfully",
      content: {
        "application/json": {
          schema: schemas.EmployeeSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateEmployeeRoute = createRoute({
  method: "put",
  path: "/employees/{userUid}",
  tags: ["Employees"],
  summary: "Update an employee",
  description:
    "Update an existing employee with the provided data\n\nRequired Permission: `employees:update`",
  request: {
    params: schemas.UserUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateEmployeeSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Employee updated successfully",
      content: {
        "application/json": {
          schema: schemas.EmployeeSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Employee not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteEmployeeRoute = createRoute({
  method: "delete",
  path: "/employees/{userUid}",
  tags: ["Employees"],
  summary: "Delete an employee",
  description:
    "Soft delete an employee by their unique identifier\n\nRequired Permission: `employees:delete`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Employee deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Employee not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Supplier routes
export const getSuppliersRoute = createRoute({
  method: "get",
  path: "/suppliers",
  tags: ["Suppliers"],
  summary: "Get all suppliers",
  description: "Retrieve a list of all suppliers\n\nRequired Permission: `suppliers:list`",
  responses: {
    200: {
      description: "List of suppliers",
      content: {
        "application/json": {
          schema: schemas.SupplierListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSupplierByIdRoute = createRoute({
  method: "get",
  path: "/suppliers/{userUid}",
  tags: ["Suppliers"],
  summary: "Get supplier by ID",
  description:
    "Retrieve a specific supplier by their unique identifier\n\nRequired Permission: `suppliers:get-by-id`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Supplier details",
      content: {
        "application/json": {
          schema: schemas.SupplierSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createSupplierRoute = createRoute({
  method: "post",
  path: "/suppliers",
  tags: ["Suppliers"],
  summary: "Create a new supplier",
  description:
    "Create a new supplier with the provided data\n\nRequired Permission: `suppliers:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateSupplierSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Supplier created successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateSupplierRoute = createRoute({
  method: "put",
  path: "/suppliers/{userUid}",
  tags: ["Suppliers"],
  summary: "Update a supplier",
  description:
    "Update an existing supplier with the provided data\n\nRequired Permission: `suppliers:update`",
  request: {
    params: schemas.UserUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateSupplierSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Supplier updated successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateSupplierStatusRoute = createRoute({
  method: "put",
  path: "/suppliers/{userUid}/status",
  tags: ["Suppliers"],
  summary: "Update supplier status",
  description:
    "Update the status of an existing supplier\n\nRequired Permission: `suppliers:update-status`",
  request: {
    params: schemas.UserUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.StatusUpdateSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Supplier status updated successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteSupplierRoute = createRoute({
  method: "delete",
  path: "/suppliers/{userUid}",
  tags: ["Suppliers"],
  summary: "Delete a supplier",
  description:
    "Soft delete a supplier by their unique identifier\n\nRequired Permission: `suppliers:delete`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Supplier deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSuppliersByOrganizationRoute = createRoute({
  method: "get",
  path: "/suppliers/organization/{orgUid}",
  tags: ["Suppliers"],
  summary: "Get suppliers by organization",
  description:
    "Retrieve all suppliers for a specific organization\n\nRequired Permission: `suppliers:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of suppliers",
      content: {
        "application/json": {
          schema: schemas.SupplierListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Organization not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Supplier Invitation routes
export const getSupplierInvitationsRoute = createRoute({
  method: "get",
  path: "/suppliers/invitations",
  tags: ["Invitations"],
  summary: "Get all supplier invitations",
  description:
    "Retrieve a list of all non-deleted supplier invitations\n\nRequired Permission: `supplier-invitations:list`",
  responses: {
    200: {
      description: "List of supplier invitations",
      content: {
        "application/json": {
          schema: schemas.SupplierInvitationListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSupplierInvitationsByOrganizationRoute = createRoute({
  method: "get",
  path: "/suppliers/invitations/organization/{orgUid}",
  tags: ["Invitations"],
  summary: "Get supplier invitations by organization",
  description:
    "Retrieve supplier invitations for a specific organization\n\nRequired Permission: `supplier-invitations:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of supplier invitations",
      content: {
        "application/json": {
          schema: schemas.SupplierInvitationListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Organization not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createSupplierInvitationRoute = createRoute({
  method: "post",
  path: "/suppliers/invitations",
  tags: ["Invitations"],
  summary: "Create a supplier invitation",
  description:
    "Create a new invitation for a supplier to join the platform\n\nRequired Permission: `supplier-invitations:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateSupplierInvitationSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Supplier invitation created successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierInvitationSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateSupplierInvitationStatusRoute = createRoute({
  method: "put",
  path: "/suppliers/invitations/{uid}/status",
  tags: ["Invitations"],
  summary: "Update invitation status",
  description:
    "Update the status of a supplier invitation\n\nRequired Permission: `supplier-invitations:update-status`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.UpdateInvitationStatusSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Invitation status updated successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierInvitationSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Invitation not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Supplier Site routes
export const getAllSitesRoute = createRoute({
  method: "get",
  path: "/suppliers/sites",
  tags: ["Suppliers"],
  summary: "Get all supplier sites",
  description:
    "Retrieve a list of all supplier sites\n\nRequired Permission: `supplier-sites:list`",
  responses: {
    200: {
      description: "List of supplier sites",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSitesBySupplierRoute = createRoute({
  method: "get",
  path: "/suppliers/{supplierUserUid}/sites",
  tags: ["Suppliers"],
  summary: "Get sites by supplier",
  description:
    "Retrieve all sites for a specific supplier\n\nRequired Permission: `supplier-sites:get-by-supplier`",
  request: {
    params: schemas.SupplierUserUidParam,
  },
  responses: {
    200: {
      description: "List of supplier sites",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSiteByIdRoute = createRoute({
  method: "get",
  path: "/suppliers/sites/{userUid}",
  tags: ["Suppliers"],
  summary: "Get supplier site by ID",
  description:
    "Retrieve a specific supplier site by its unique identifier\n\nRequired Permission: `supplier-sites:get-by-id`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Supplier site details",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier site not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createSiteRoute = createRoute({
  method: "post",
  path: "/suppliers/sites",
  tags: ["Suppliers"],
  summary: "Create a new supplier site",
  description:
    "Create a new supplier site with the provided data\n\nRequired Permission: `supplier-sites:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateSupplierSiteSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Supplier site created successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateSiteRoute = createRoute({
  method: "put",
  path: "/suppliers/sites/{userUid}",
  tags: ["Suppliers"],
  summary: "Update a supplier site",
  description:
    "Update an existing supplier site with the provided data\n\nRequired Permission: `supplier-sites:update`",
  request: {
    params: schemas.UserUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateSupplierSiteSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Supplier site updated successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier site not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateSiteStatusRoute = createRoute({
  method: "put",
  path: "/suppliers/sites/{userUid}/status",
  tags: ["Suppliers"],
  summary: "Update supplier site status",
  description:
    "Update the status of an existing supplier site\n\nRequired Permission: `supplier-sites:update-status`",
  request: {
    params: schemas.UserUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.StatusUpdateSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Supplier site status updated successfully",
      content: {
        "application/json": {
          schema: schemas.SupplierSiteSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier site not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteSiteRoute = createRoute({
  method: "delete",
  path: "/suppliers/sites/{userUid}",
  tags: ["Suppliers"],
  summary: "Delete a supplier site",
  description:
    "Soft delete a supplier site by its unique identifier\n\nRequired Permission: `supplier-sites:delete`",
  request: {
    params: schemas.UserUidParam,
  },
  responses: {
    200: {
      description: "Supplier site deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier site not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Address routes
export const getAddressesRoute = createRoute({
  method: "get",
  path: "/addresses",
  tags: ["Addresses"],
  summary: "Get all addresses",
  description: "Retrieve a list of all addresses\n\nRequired Permission: `addresses:list`",
  responses: {
    200: {
      description: "List of addresses",
      content: {
        "application/json": {
          schema: schemas.AddressListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getAddressByIdRoute = createRoute({
  method: "get",
  path: "/addresses/{uid}",
  tags: ["Addresses"],
  summary: "Get address by ID",
  description:
    "Retrieve a specific address by its unique identifier\n\nRequired Permission: `addresses:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Address details",
      content: {
        "application/json": {
          schema: schemas.AddressSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Address not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createAddressRoute = createRoute({
  method: "post",
  path: "/addresses",
  tags: ["Addresses"],
  summary: "Create a new address",
  description:
    "Create a new address with the provided data\n\nRequired Permission: `addresses:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateAddressSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Address created successfully",
      content: {
        "application/json": {
          schema: schemas.AddressSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateAddressRoute = createRoute({
  method: "put",
  path: "/addresses/{uid}",
  tags: ["Addresses"],
  summary: "Update an address",
  description:
    "Update an existing address with the provided data\n\nRequired Permission: `addresses:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateAddressSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Address updated successfully",
      content: {
        "application/json": {
          schema: schemas.AddressSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Address not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteAddressRoute = createRoute({
  method: "delete",
  path: "/addresses/{uid}",
  tags: ["Addresses"],
  summary: "Delete an address",
  description:
    "Soft delete an address by its unique identifier\n\nRequired Permission: `addresses:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Address deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Address not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Org Unit routes
export const getOrgUnitsRoute = createRoute({
  method: "get",
  path: "/org-units",
  tags: ["OrgUnits"],
  summary: "Get all org units",
  description:
    "Retrieve a list of all organizational units\n\nRequired Permission: `org-units:list`",
  responses: {
    200: {
      description: "List of org units",
      content: {
        "application/json": {
          schema: schemas.OrgUnitListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getOrgUnitByIdRoute = createRoute({
  method: "get",
  path: "/org-units/{uid}",
  tags: ["OrgUnits"],
  summary: "Get org unit by ID",
  description:
    "Retrieve a specific organizational unit by its unique identifier\n\nRequired Permission: `org-units:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Org unit details",
      content: {
        "application/json": {
          schema: schemas.OrgUnitSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Org unit not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getOrgUnitsByOrganizationRoute = createRoute({
  method: "get",
  path: "/org-units/organization/{orgUid}",
  tags: ["OrgUnits"],
  summary: "Get org units by organization",
  description:
    "Retrieve all organizational units for a specific organization\n\nRequired Permission: `org-units:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of org units",
      content: {
        "application/json": {
          schema: schemas.OrgUnitListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createOrgUnitRoute = createRoute({
  method: "post",
  path: "/org-units",
  tags: ["OrgUnits"],
  summary: "Create a new org unit",
  description:
    "Create a new organizational unit with the provided data\n\nRequired Permission: `org-units:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateOrgUnitSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Org unit created successfully",
      content: {
        "application/json": {
          schema: schemas.OrgUnitSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateOrgUnitRoute = createRoute({
  method: "put",
  path: "/org-units/{uid}",
  tags: ["OrgUnits"],
  summary: "Update an org unit",
  description:
    "Update an existing organizational unit with the provided data\n\nRequired Permission: `org-units:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateOrgUnitSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Org unit updated successfully",
      content: {
        "application/json": {
          schema: schemas.OrgUnitSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Org unit not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteOrgUnitRoute = createRoute({
  method: "delete",
  path: "/org-units/{uid}",
  tags: ["OrgUnits"],
  summary: "Delete an org unit",
  description:
    "Soft delete an organizational unit by its unique identifier\n\nRequired Permission: `org-units:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Org unit deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Org unit not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Role routes
export const getRolesRoute = createRoute({
  method: "get",
  path: "/roles",
  tags: ["Roles"],
  summary: "Get all roles",
  description: "Retrieve a list of all roles\n\nRequired Permission: `roles:list`",
  responses: {
    200: {
      description: "List of roles",
      content: {
        "application/json": {
          schema: schemas.RoleListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getRoleByIdRoute = createRoute({
  method: "get",
  path: "/roles/{uid}",
  tags: ["Roles"],
  summary: "Get role by ID",
  description:
    "Retrieve a specific role by its unique identifier\n\nRequired Permission: `roles:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Role details",
      content: {
        "application/json": {
          schema: schemas.RoleSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Role not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getRolesByOrganizationRoute = createRoute({
  method: "get",
  path: "/roles/organization/{orgUid}",
  tags: ["Roles"],
  summary: "Get roles by organization",
  description:
    "Retrieve all roles for a specific organization\n\nRequired Permission: `roles:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of roles",
      content: {
        "application/json": {
          schema: schemas.RoleListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createRoleRoute = createRoute({
  method: "post",
  path: "/roles",
  tags: ["Roles"],
  summary: "Create a new role",
  description: "Create a new role with the provided data\n\nRequired Permission: `roles:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateRoleSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Role created successfully",
      content: {
        "application/json": {
          schema: schemas.RoleSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateRoleRoute = createRoute({
  method: "put",
  path: "/roles/{uid}",
  tags: ["Roles"],
  summary: "Update a role",
  description:
    "Update an existing role with the provided data\n\nRequired Permission: `roles:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateRoleSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Role updated successfully",
      content: {
        "application/json": {
          schema: schemas.RoleSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Role not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteRoleRoute = createRoute({
  method: "delete",
  path: "/roles/{uid}",
  tags: ["Roles"],
  summary: "Delete a role",
  description: "Soft delete a role by its unique identifier\n\nRequired Permission: `roles:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Role deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Role not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Store routes
export const getStoresRoute = createRoute({
  method: "get",
  path: "/stores",
  tags: ["Stores"],
  summary: "Get all stores",
  description: "Retrieve a list of all stores\n\nRequired Permission: `stores:list`",
  responses: {
    200: {
      description: "List of stores",
      content: {
        "application/json": {
          schema: schemas.StoreListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getStoreByIdRoute = createRoute({
  method: "get",
  path: "/stores/{uid}",
  tags: ["Stores"],
  summary: "Get store by ID",
  description:
    "Retrieve a specific store by its unique identifier\n\nRequired Permission: `stores:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Store details",
      content: {
        "application/json": {
          schema: schemas.StoreSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Store not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getStoresByOrganizationRoute = createRoute({
  method: "get",
  path: "/stores/organization/{orgUid}",
  tags: ["Stores"],
  summary: "Get stores by organization",
  description:
    "Retrieve all stores for a specific organization\n\nRequired Permission: `stores:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of stores",
      content: {
        "application/json": {
          schema: schemas.StoreListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createStoreRoute = createRoute({
  method: "post",
  path: "/stores",
  tags: ["Stores"],
  summary: "Create a new store",
  description: "Create a new store with the provided data\n\nRequired Permission: `stores:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateStoreSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Store created successfully",
      content: {
        "application/json": {
          schema: schemas.StoreSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateStoreRoute = createRoute({
  method: "put",
  path: "/stores/{uid}",
  tags: ["Stores"],
  summary: "Update a store",
  description:
    "Update an existing store with the provided data\n\nRequired Permission: `stores:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateStoreSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Store updated successfully",
      content: {
        "application/json": {
          schema: schemas.StoreSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Store not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteStoreRoute = createRoute({
  method: "delete",
  path: "/stores/{uid}",
  tags: ["Stores"],
  summary: "Delete a store",
  description:
    "Soft delete a store by its unique identifier\n\nRequired Permission: `stores:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Store deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Store not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval process routes
export const getApprovalProcessesRoute = createRoute({
  method: "get",
  path: "/approval-processes",
  tags: ["Approvals"],
  summary: "Get all approval processes",
  description:
    "Retrieve a list of all approval process definitions\n\nRequired Permission: `approval-processes:list`",
  responses: {
    200: {
      description: "List of approval processes",
      content: {
        "application/json": {
          schema: schemas.ApprovalProcessListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getApprovalProcessByIdRoute = createRoute({
  method: "get",
  path: "/approval-processes/processes/{uid}",
  tags: ["Approvals"],
  summary: "Get approval process by ID",
  description:
    "Retrieve a specific approval process by its unique identifier\n\nRequired Permission: `approval-processes:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval process details",
      content: {
        "application/json": {
          schema: schemas.ApprovalProcessSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval process not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getApprovalProcessesByOrganizationRoute = createRoute({
  method: "get",
  path: "/approval-processes/processes/organization/{orgUid}",
  tags: ["Approvals"],
  summary: "Get approval processes by organization",
  description:
    "Retrieve all approval processes for a specific organization\n\nRequired Permission: `approval-processes:get-by-organization`",
  request: {
    params: schemas.OrgUidParam,
  },
  responses: {
    200: {
      description: "List of approval processes",
      content: {
        "application/json": {
          schema: schemas.ApprovalProcessListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createApprovalProcessRoute = createRoute({
  method: "post",
  path: "/approval-processes/processes",
  tags: ["Approvals"],
  summary: "Create a new approval process",
  description:
    "Create a new approval process with the provided data\n\nRequired Permission: `approval-processes:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateApprovalProcessSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Approval process created successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalProcessSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateApprovalProcessRoute = createRoute({
  method: "put",
  path: "/approval-processes/{uid}",
  tags: ["Approvals"],
  summary: "Update an approval process",
  description:
    "Update an existing approval process with the provided data\n\nRequired Permission: `approval-processes:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateApprovalProcessSchema.partial(),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Approval process updated successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalProcessSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval process not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteApprovalProcessRoute = createRoute({
  method: "delete",
  path: "/approval-processes/{uid}",
  tags: ["Approvals"],
  summary: "Delete an approval process",
  description:
    "Soft delete an approval process by its unique identifier\n\nRequired Permission: `approval-processes:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval process deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval process not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval Step routes
export const getStepsByProcessRoute = createRoute({
  method: "get",
  path: "/approval-processes/processes/{processUid}/steps",
  tags: ["Approvals"],
  summary: "Get steps by process",
  description:
    "Retrieve all approval steps for a specific process\n\nRequired Permission: `approval-steps:get-by-process`",
  request: {
    params: schemas.ProcessUidParam,
  },
  responses: {
    200: {
      description: "List of approval steps",
      content: {
        "application/json": {
          schema: z.array(z.any()).openapi("ApprovalStepList"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Process not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getStepByIdRoute = createRoute({
  method: "get",
  path: "/approval-processes/steps/{uid}",
  tags: ["Approvals"],
  summary: "Get step by ID",
  description:
    "Retrieve a specific approval step by its unique identifier\n\nRequired Permission: `approval-steps:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval step details",
      content: {
        "application/json": {
          schema: z.any().openapi("ApprovalStep"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Step not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createStepRoute = createRoute({
  method: "post",
  path: "/approval-processes/steps",
  tags: ["Approvals"],
  summary: "Create a new approval step",
  description:
    "Create a new approval step with the provided data\n\nRequired Permission: `approval-steps:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              approvalProcessUid: z.string().uuid(),
              stepOrder: z.number().int(),
              stepType: z.string(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("CreateApprovalStep"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Approval step created successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("ApprovalStep"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateStepRoute = createRoute({
  method: "put",
  path: "/approval-processes/steps/{uid}",
  tags: ["Approvals"],
  summary: "Update an approval step",
  description:
    "Update an existing approval step with the provided data\n\nRequired Permission: `approval-steps:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              stepOrder: z.number().int().optional(),
              stepType: z.string().optional(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("UpdateApprovalStep"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Approval step updated successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("ApprovalStep"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Step not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteStepRoute = createRoute({
  method: "delete",
  path: "/approval-processes/steps/{uid}",
  tags: ["Approvals"],
  summary: "Delete an approval step",
  description:
    "Soft delete an approval step by its unique identifier\n\nRequired Permission: `approval-steps:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval step deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Step not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval Responsibility routes
export const getResponsibilitiesByStepRoute = createRoute({
  method: "get",
  path: "/approval-processes/steps/{stepUid}/responsibilities",
  tags: ["Approvals"],
  summary: "Get responsibilities by step",
  description:
    "Retrieve all responsibilities for a specific approval step\n\nRequired Permission: `approval-responsibilities:get-by-step`",
  request: {
    params: schemas.StepUidParam,
  },
  responses: {
    200: {
      description: "List of approval responsibilities",
      content: {
        "application/json": {
          schema: z.array(z.any()).openapi("ApprovalResponsibilityList"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Step not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createResponsibilityRoute = createRoute({
  method: "post",
  path: "/approval-processes/responsibilities",
  tags: ["Approvals"],
  summary: "Create a new approval responsibility",
  description:
    "Create a new approval responsibility with the provided data\n\nRequired Permission: `approval-responsibilities:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              approvalStepUid: z.string().uuid(),
              roleUid: z.string().uuid().optional(),
              orgUnitUid: z.string().uuid().optional(),
              employeeUserUid: z.string().uuid().optional(),
              action: z.string(),
              fallbackRoleUid: z.string().uuid().optional(),
              fallbackOrgUnitUid: z.string().uuid().optional(),
              fallbackEmployeeUserUid: z.string().uuid().optional(),
              extraData: z.any().optional(),
            })
            .openapi("CreateApprovalResponsibility"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Approval responsibility created successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("ApprovalResponsibility"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateResponsibilityRoute = createRoute({
  method: "put",
  path: "/approval-processes/responsibilities/{uid}",
  tags: ["Approvals"],
  summary: "Update an approval responsibility",
  description:
    "Update an existing approval responsibility with the provided data\n\nRequired Permission: `approval-responsibilities:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              roleUid: z.string().uuid().optional(),
              orgUnitUid: z.string().uuid().optional(),
              employeeUserUid: z.string().uuid().optional(),
              action: z.string().optional(),
              fallbackRoleUid: z.string().uuid().optional(),
              fallbackOrgUnitUid: z.string().uuid().optional(),
              fallbackEmployeeUserUid: z.string().uuid().optional(),
              extraData: z.any().optional(),
            })
            .openapi("UpdateApprovalResponsibility"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Approval responsibility updated successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("ApprovalResponsibility"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Responsibility not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteResponsibilityRoute = createRoute({
  method: "delete",
  path: "/approval-processes/responsibilities/{uid}",
  tags: ["Approvals"],
  summary: "Delete an approval responsibility",
  description:
    "Soft delete an approval responsibility by its unique identifier\n\nRequired Permission: `approval-responsibilities:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval responsibility deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Responsibility not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval Request routes
export const getApprovalRequestsRoute = createRoute({
  method: "get",
  path: "/approval-processes/requests",
  tags: ["Approvals"],
  summary: "Get all approval requests",
  description:
    "Retrieve a list of all approval requests\n\nRequired Permission: `approval-requests:list`",
  responses: {
    200: {
      description: "List of approval requests",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getApprovalRequestByIdRoute = createRoute({
  method: "get",
  path: "/approval-processes/requests/{uid}",
  tags: ["Approvals"],
  summary: "Get approval request by ID",
  description:
    "Retrieve a specific approval request by its unique identifier\n\nRequired Permission: `approval-requests:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Approval request details",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getApprovalRequestsBySupplierRoute = createRoute({
  method: "get",
  path: "/approval-processes/requests/supplier/{supplierUid}",
  tags: ["Approvals"],
  summary: "Get approval requests by supplier",
  description:
    "Retrieve all approval requests for a specific supplier\n\nRequired Permission: `approval-requests:get-by-supplier`",
  request: {
    params: schemas.SupplierUserUidParam,
  },
  responses: {
    200: {
      description: "List of approval requests",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createApprovalRequestRoute = createRoute({
  method: "post",
  path: "/approval-processes/requests",
  tags: ["Approvals"],
  summary: "Create a new approval request",
  description:
    "Create a new approval request with the provided data\n\nRequired Permission: `approval-requests:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateApprovalRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Approval request created successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateRequestStatusRoute = createRoute({
  method: "put",
  path: "/approval-processes/requests/{uid}/status",
  tags: ["Approvals"],
  summary: "Update approval request status",
  description:
    "Update the status of an existing approval request\n\nRequired Permission: `approval-requests:update-status`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              status: z.enum(["PENDING", "APPROVED", "REJECTED", "CANCELED"]),
              comments: z.string().optional(),
            })
            .openapi("UpdateRequestStatus"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Approval request status updated successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateRequestStepRoute = createRoute({
  method: "put",
  path: "/approval-processes/requests/{uid}/step",
  tags: ["Approvals"],
  summary: "Update approval request step",
  description:
    "Update the current step of an existing approval request\n\nRequired Permission: `approval-requests:update-step`",
  request: {
    params: schemas.RequestUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.UpdateRequestStepSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Approval request step updated successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalRequestSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Approval request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval Log routes
export const getLogsByRequestRoute = createRoute({
  method: "get",
  path: "/approval-processes/requests/{requestUid}/logs",
  tags: ["Approvals"],
  summary: "Get logs by request",
  description:
    "Retrieve all logs for a specific approval request\n\nRequired Permission: `approval-logs:get-by-request`",
  request: {
    params: schemas.RequestUidParam,
  },
  responses: {
    200: {
      description: "List of approval logs",
      content: {
        "application/json": {
          schema: schemas.ApprovalLogListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createLogRoute = createRoute({
  method: "post",
  path: "/approval-processes/requests/{requestUid}/logs",
  tags: ["Approvals"],
  summary: "Create approval log",
  description:
    "Create a new log entry for an approval request\n\nRequired Permission: `approval-logs:create`",
  request: {
    params: schemas.RequestUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateApprovalLogSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Log created successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalLogSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Approval Comment routes
export const getCommentsByRequestRoute = createRoute({
  method: "get",
  path: "/approval-processes/requests/{requestUid}/comments",
  tags: ["Approvals"],
  summary: "Get comments by request",
  description:
    "Retrieve all comments for a specific approval request\n\nRequired Permission: `approval-comments:get-by-request`",
  request: {
    params: schemas.RequestUidParam,
  },
  responses: {
    200: {
      description: "List of approval comments",
      content: {
        "application/json": {
          schema: schemas.ApprovalCommentListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createCommentRoute = createRoute({
  method: "post",
  path: "/approval-processes/requests/{requestUid}/comments",
  tags: ["Approvals"],
  summary: "Create comment",
  description:
    "Add a new comment to an approval request\n\nRequired Permission: `approval-comments:create`",
  request: {
    params: schemas.RequestUidParam,
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateApprovalCommentSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Comment created successfully",
      content: {
        "application/json": {
          schema: schemas.ApprovalCommentSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Request not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Document routes
export const getDocumentsRoute = createRoute({
  method: "get",
  path: "/documents",
  tags: ["Documents"],
  summary: "Get all documents",
  description: "Retrieve a list of all documents\n\nRequired Permission: `documents:list`",
  responses: {
    200: {
      description: "List of documents",
      content: {
        "application/json": {
          schema: schemas.DocumentListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getDocumentByIdRoute = createRoute({
  method: "get",
  path: "/documents/{uid}",
  tags: ["Documents"],
  summary: "Get document by ID",
  description:
    "Retrieve a specific document by its unique identifier\n\nRequired Permission: `documents:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Document details",
      content: {
        "application/json": {
          schema: schemas.DocumentSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Document not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getDocumentsByEntityRoute = createRoute({
  method: "get",
  path: "/documents/entity/{entityType}/{entityUid}",
  tags: ["Documents"],
  summary: "Get documents by entity",
  description:
    "Retrieve all documents for a specific entity\n\nRequired Permission: `documents:get-by-site`",
  request: {
    params: schemas.EntityParams,
  },
  responses: {
    200: {
      description: "List of documents",
      content: {
        "application/json": {
          schema: schemas.DocumentListSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createDocumentRoute = createRoute({
  method: "post",
  path: "/documents",
  tags: ["Documents"],
  summary: "Create a new document",
  description:
    "Create a new document with the provided data\n\nRequired Permission: `documents:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: schemas.CreateDocumentSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Document created successfully",
      content: {
        "application/json": {
          schema: schemas.DocumentSchema,
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateDocumentRoute = createRoute({
  method: "put",
  path: "/documents/{uid}",
  tags: ["Documents"],
  summary: "Update a document",
  description:
    "Update an existing document with the provided data\n\nRequired Permission: `documents:update-status`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              documentType: z.string().optional(),
              fileName: z.string().optional(),
              fileUrl: z.string().optional(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("UpdateDocument"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Document updated successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("Document"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Document not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteDocumentRoute = createRoute({
  method: "delete",
  path: "/documents/{uid}",
  tags: ["Documents"],
  summary: "Delete a document",
  description:
    "Soft delete a document by its unique identifier\n\nRequired Permission: `documents:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Document deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Document not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

// Supplier Term routes
export const getSupplierTermsRoute = createRoute({
  method: "get",
  path: "/supplier-terms",
  tags: ["Terms"],
  summary: "Get all supplier terms",
  description: "Retrieve a list of all supplier terms\n\nRequired Permission: `terms:list`",
  responses: {
    200: {
      description: "List of supplier terms",
      content: {
        "application/json": {
          schema: z.array(z.any()).openapi("SupplierTermList"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSupplierTermByIdRoute = createRoute({
  method: "get",
  path: "/supplier-terms/{uid}",
  tags: ["Terms"],
  summary: "Get supplier term by ID",
  description:
    "Retrieve a specific supplier term by its unique identifier\n\nRequired Permission: `terms:get-by-id`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Supplier term details",
      content: {
        "application/json": {
          schema: z.any().openapi("SupplierTerm"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier term not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const getSupplierTermsBySupplierRoute = createRoute({
  method: "get",
  path: "/supplier-terms/supplier/{supplierUid}",
  tags: ["Terms"],
  summary: "Get supplier terms by supplier",
  description:
    "Retrieve all terms for a specific supplier\n\nRequired Permission: `terms:get-by-site`",
  request: {
    params: schemas.SupplierUserUidParam,
  },
  responses: {
    200: {
      description: "List of supplier terms",
      content: {
        "application/json": {
          schema: z.array(z.any()).openapi("SupplierTermList"),
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createFinancialTermRoute = createRoute({
  method: "post",
  path: "/supplier-terms/financial",
  tags: ["Terms"],
  summary: "Create a new financial term",
  description:
    "Create a new financial term with the provided data\n\nRequired Permission: `financial-terms:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              supplierUid: z.string().uuid(),
              termType: z.string(),
              value: z.number(),
              currency: z.string(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("CreateFinancialTerm"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Financial term created successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("SupplierTerm"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createTradeTermRoute = createRoute({
  method: "post",
  path: "/supplier-terms/trade",
  tags: ["Terms"],
  summary: "Create a new trade term",
  description:
    "Create a new trade term with the provided data\n\nRequired Permission: `trade-terms:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              supplierUid: z.string().uuid(),
              termType: z.string(),
              value: z.string(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("CreateTradeTerm"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Trade term created successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("SupplierTerm"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const createSupportTermRoute = createRoute({
  method: "post",
  path: "/supplier-terms/support",
  tags: ["Terms"],
  summary: "Create a new support term",
  description:
    "Create a new support term with the provided data\n\nRequired Permission: `support-terms:create`",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              supplierUid: z.string().uuid(),
              termType: z.string(),
              value: z.string(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("CreateSupportTerm"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Support term created successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("SupplierTerm"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateTermRoute = createRoute({
  method: "put",
  path: "/supplier-terms/{uid}",
  tags: ["Terms"],
  summary: "Update a supplier term",
  description:
    "Update an existing supplier term with the provided data\n\nRequired Permission: `terms:update`",
  request: {
    params: schemas.UuidParam,
    body: {
      content: {
        "application/json": {
          schema: z
            .object({
              termType: z.string().optional(),
              value: z.union([z.number(), z.string()]).optional(),
              currency: z.string().optional(),
              description: z.string().optional(),
              extraData: z.any().optional(),
            })
            .openapi("UpdateSupplierTerm"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Supplier term updated successfully",
      content: {
        "application/json": {
          schema: z.any().openapi("SupplierTerm"),
        },
      },
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier term not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteTermRoute = createRoute({
  method: "delete",
  path: "/supplier-terms/{uid}",
  tags: ["Terms"],
  summary: "Delete a supplier term",
  description:
    "Soft delete a supplier term by its unique identifier\n\nRequired Permission: `terms:delete`",
  request: {
    params: schemas.UuidParam,
  },
  responses: {
    200: {
      description: "Supplier term deleted successfully",
      content: {
        "application/json": {
          schema: schemas.SuccessResponseSchema,
        },
      },
    },
    403: {
      description: "Insufficient permissions",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
    404: {
      description: "Supplier term not found",
      content: {
        "application/json": {
          schema: schemas.ErrorResponseSchema,
        },
      },
    },
  },
});
