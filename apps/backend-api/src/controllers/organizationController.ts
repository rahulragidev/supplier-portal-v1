import type { Context } from "hono";
import { z } from "zod";
import { db } from "../../../../packages/database/database.js";
import { organization } from "@workspace/database/schema";
import { 
  NewOrganizationSchema, 
  ClientOrganizationSchema 
} from "@workspace/database/zod-schema";
import { eq, and, isNull } from "drizzle-orm";
import { handleError } from "../middleware/errorHandler.js";
import { generateUUID, formatDate } from "../utils/helpers.js";

export const organizationController = {
  // Get all organizations (non-deleted)
  async getAllOrganizations(c: Context) {
    try {
      const allOrganizations = await db
        .select()
        .from(organization)
        .where(isNull(organization.deletedAt));
      
      return c.json(allOrganizations);
    } catch (error) {
      return handleError(c, error);
    }
  },

  // Get organization by ID
  async getOrganizationById(c: Context) {
    try {
      const uid = c.req.param("uid");
      const orgData = await db
        .select()
        .from(organization)
        .where(and(
          eq(organization.uid, uid),
          isNull(organization.deletedAt)
        ));
      
      if (orgData.length === 0) {
        return c.json({ error: "Organization not found" }, 404);
      }
      
      return c.json(orgData[0]);
    } catch (error) {
      return handleError(c, error);
    }
  },

  // Create a new organization
  async createOrganization(c: Context) {
    try {
      const data = await c.req.json();
      const validated = ClientOrganizationSchema.parse(data);
      
      // Prepare the data for the database
      const newOrganization = NewOrganizationSchema.parse({
        uid: data.uid || generateUUID(),
        ...validated,
        createdAt: formatDate(),
        updatedAt: formatDate(),
        createdBy: data.createdBy || null,
        lastUpdatedBy: data.createdBy || null
      });
      
      const inserted = await db.insert(organization).values(newOrganization).returning();
      return c.json(inserted[0], 201);
    } catch (error) {
      return handleError(c, error);
    }
  },

  // Update an organization
  async updateOrganization(c: Context) {
    try {
      const uid = c.req.param("uid");
      const data = await c.req.json();
      
      // Validate the input with client schema
      const validated = ClientOrganizationSchema.partial().parse(data);
      
      // Update with the validated data
      const updated = await db
        .update(organization)
        .set({
          ...validated,
          updatedAt: formatDate(),
          lastUpdatedBy: data.lastUpdatedBy || null
        })
        .where(and(
          eq(organization.uid, uid),
          isNull(organization.deletedAt)
        ))
        .returning();
      
      if (updated.length === 0) {
        return c.json({ error: "Organization not found" }, 404);
      }
      
      return c.json(updated[0]);
    } catch (error) {
      return handleError(c, error);
    }
  },

  // Soft delete an organization
  async deleteOrganization(c: Context) {
    try {
      const uid = c.req.param("uid");
      const data = await c.req.json();
      
      const updated = await db
        .update(organization)
        .set({
          deletedAt: formatDate(),
          lastUpdatedBy: data.lastUpdatedBy || null
        })
        .where(and(
          eq(organization.uid, uid),
          isNull(organization.deletedAt)
        ))
        .returning();
      
      if (updated.length === 0) {
        return c.json({ error: "Organization not found" }, 404);
      }
      
      return c.json({ success: true });
    } catch (error) {
      return handleError(c, error);
    }
  }
}; 