# Projects Section - Customization Guide

Welcome! This guide will help you easily manage and customize your projects portfolio section.

## How It Works

The projects system is designed to be super easy to update. All your projects are stored in one simple file that you can edit directly.

### Project Structure

```
/data/projects.ts          ← Edit this file to add/remove projects
/components/project-card.tsx     ← Individual project card component (don't need to edit)
/components/sections/projects.tsx ← Projects section with filtering (don't need to edit)
/app/page.tsx              ← Main page (projects auto-included)
```

## How to Add Your Own Projects

### Step 1: Open the Projects File

Open `/data/projects.ts` in your editor. You'll see an array of sample projects.

### Step 2: Add a New Project

Add a new object to the `projects` array following this structure:

```typescript
{
  id: 7,  // Unique number (increment from the last one)
  title: 'Your Project Title',
  description: 'Brief description of what your project does',
  category: 'Full Stack',  // Options: 'Frontend', 'Backend', 'Full Stack', 'Mobile'
  image: '/projects/your-project.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],  // Array of tech used
  link: 'https://github.com/yourusername/your-project',  // GitHub link
  liveLink: 'https://your-project-demo.vercel.app',  // Live demo link
}
```

### Step 3: Update Your GitHub Links

Find these lines and update them with YOUR actual GitHub username and project URLs:

```typescript
// From:
link: 'https://github.com/yourusername/ecommerce',

// To:
link: 'https://github.com/subahanislam/ecommerce',
```

## Project Categories

The projects have built-in filtering by category. Choose one:

- **Frontend**: React apps, JavaScript projects, UI-focused
- **Backend**: Node.js, APIs, database work
- **Full Stack**: MERN projects, complete applications
- **Mobile**: React Native, mobile apps

## Example: Adding Your E-Commerce Project

```typescript
{
  id: 7,
  title: 'My E-Commerce Store',
  description: 'Full-stack MERN e-commerce platform with authentication, shopping cart, and Stripe payment integration',
  category: 'Full Stack',
  image: '/projects/my-ecommerce.jpg',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
  link: 'https://github.com/subahanislam/my-ecommerce-store',
  liveLink: 'https://my-ecommerce.vercel.app',
}
```

## Editing Existing Projects

1. Open `/data/projects.ts`
2. Find the project you want to edit
3. Update any field:
   - `title`: Change the project name
   - `description`: Update the description
   - `technologies`: Add or remove technologies
   - `link`: Update GitHub URL
   - `liveLink`: Update live demo URL
   - `category`: Change the category

## Removing Projects

Simply delete the entire project object from the array. For example:

```typescript
export const projects = [
  // Keep this one
  {
    id: 1,
    title: 'E-Commerce Platform',
    // ...
  },
  // DELETE THIS ENTIRE BLOCK if you don't want it
  // {
  //   id: 2,
  //   title: 'Task Management App',
  //   // ...
  // }
];
```

## About the `id` Field

- Each project needs a unique `id` number
- Just use sequential numbers (1, 2, 3, 4, etc.)
- It doesn't need to match array order, but make them unique
- Example: If you have 5 projects, use ids 1-5

## Technologies Array

List the main technologies used in each project:

```typescript
technologies: [
  'React',
  'Node.js', 
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'JWT'
]
```

Keep it to 3-6 most relevant technologies.

## Project Image

The `image` field currently uses a placeholder gradient. To add real images:

1. Save your project images in `/public/projects/`
2. Update the path:
   ```typescript
   image: '/projects/my-project-screenshot.jpg'
   ```

If you don't have images yet, the gradient backgrounds work fine!

## Live Demo Links

- **liveLink**: Should be your deployed app (Vercel, Netlify, etc.)
- **link**: Should be your GitHub repository

When visitors hover over project cards, they'll see buttons to:
- Visit the GitHub repo (GitHub icon)
- View the live demo (External link icon)

## Features

The projects section automatically includes:

- **Category Filtering**: Users can filter by Frontend/Backend/Full Stack/Mobile
- **"All" Filter**: Shows all projects
- **Hover Effects**: GitHub and Live Demo buttons appear on hover
- **Responsive**: Works on mobile, tablet, and desktop
- **Animations**: Smooth fade-in and scroll animations
- **Smooth Transitions**: When filtering categories, projects animate in/out

## Customization Tips

### Tip 1: Order Matters
Projects display in the order you list them. Put your best work first!

### Tip 2: Good Descriptions
Write clear, compelling descriptions (1 sentence). For example:
- ✅ "Full-stack MERN app with real-time chat and user authentication"
- ❌ "A project I made"

### Tip 3: Match Your Resume
Make sure projects here match your professional resume for consistency.

### Tip 4: Update Regularly
As you build new projects, add them here to keep your portfolio fresh.

## Quick Reference

### Add a Project
1. Copy an existing project object
2. Change the `id` (use next number)
3. Update all fields with your project info
4. Save the file

### Remove a Project
1. Find the project in `/data/projects.ts`
2. Delete the entire object
3. Save the file

### Edit a Project
1. Find the project in `/data/projects.ts`
2. Update the fields you want to change
3. Save the file

## Common Issues

### Projects not showing up?
- Check that all projects have unique `id` values
- Make sure `category` is one of: 'Frontend', 'Backend', 'Full Stack', 'Mobile'
- Verify the syntax (commas, brackets, quotes)

### GitHub or demo links not working?
- Double-check the URLs are correct
- Make sure they start with `https://`
- Test the links in your browser

### Can't find the file?
- Look in the `/data/` folder
- It should be named `projects.ts`

## Need Help?

All the components are set up so you just need to edit the `/data/projects.ts` file. The filtering, animations, and styling all work automatically!

---

**Happy updating! Show off your best work! 🚀**
