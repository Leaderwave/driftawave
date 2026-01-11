/**
 * Directus Admin Client
 * Authenticated client for dashboard operations
 */

import { createDirectus, rest, authentication, login, refresh, readMe, createItem, updateItem, deleteItem, uploadFiles } from '@directus/sdk';

// Directus URL with fallback for build time
const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://driftawave-directus.onrender.com';

// Initialize Directus client with authentication
const directusAdmin = createDirectus(DIRECTUS_URL)
  .with(rest())
  .with(authentication('cookie', { credentials: 'include' }));

/**
 * Login to Directus
 */
export async function loginToDirectus(email: string, password: string) {
  try {
    const response = await directusAdmin.request(
      login({ email, password })
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Invalid credentials' };
  }
}

/**
 * Get current user
 */
export async function getCurrentUser() {
  try {
    const user = await directusAdmin.request(readMe());
    return { success: true, data: user };
  } catch (error) {
    console.error('Get user error:', error);
    return { success: false, error: 'Not authenticated' };
  }
}

/**
 * Refresh authentication token
 */
export async function refreshAuth() {
  try {
    const response = await directusAdmin.request(refresh());
    return { success: true, data: response };
  } catch (error) {
    console.error('Refresh error:', error);
    return { success: false, error: 'Session expired' };
  }
}

/**
 * Create a new blog post
 */
export async function createBlogPost(data: {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  published_date?: string;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  status: 'draft' | 'published';
}) {
  try {
    const post = await directusAdmin.request(
      createItem('blog_posts', data)
    );
    return { success: true, data: post };
  } catch (error) {
    console.error('Create post error:', error);
    return { success: false, error: 'Failed to create post' };
  }
}

/**
 * Update a blog post
 */
export async function updateBlogPost(id: string, data: Partial<{
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  published_date?: string;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  status: 'draft' | 'published';
}>) {
  try {
    const post = await directusAdmin.request(
      updateItem('blog_posts', id, data)
    );
    return { success: true, data: post };
  } catch (error) {
    console.error('Update post error:', error);
    return { success: false, error: 'Failed to update post' };
  }
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string) {
  try {
    await directusAdmin.request(
      deleteItem('blog_posts', id)
    );
    return { success: true };
  } catch (error) {
    console.error('Delete post error:', error);
    return { success: false, error: 'Failed to delete post' };
  }
}

/**
 * Upload file to Directus
 */
export async function uploadFile(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await directusAdmin.request(
      uploadFiles(formData)
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Upload error:', error);
    return { success: false, error: 'Failed to upload file' };
  }
}

export { directusAdmin };

