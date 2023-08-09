## Assignment for Nodeflair SWE Internship

### Overview

![nodeflair](https://github.com/btjm123/nodeflair-assignment-2/assets/19306879/4cbecbdb-f2eb-490c-91a9-89200b3514f0)

Frontend was done with
- React
- TypeScript (for type safety/integrity and enhanced developer productivity)
- CSS components were written from scratch with pure, vanilla CSS

There was no backend setup as it was beyond the scope of the assignment. 

In view of that I created some mock JSON data to test on the frontend.

### Best Practices

- Types from the mock backend are written in `snake_case`
- Types on the frontend are written in `camelCase`.

The reason why I established different naming conventions for both the frontend and mock backend is to emphasize seperation between both ends. This makes it clear which parts of the code are fetched from the mock backend and which parts are responsible for the frontend logic.

- Clear seperation of concerns (i.e Models, Views)
- Modularised and reusuable components (i.e `JobListingPage` contains a series of `JobListingCards` and one `JobDescriptionCard`)
- State Management

I used a simple `useState` hook on the top-level component (JobListingPage) and propagated the currently selected `JobListing` state to the child elements via prop drilling. Reason why I didn't opt for a `useContext` hook was because I felt that the `useContext` hook was an overkill solution for a shallow component tree in my app.

### Additional Features

- Tried my best to replicate the front end as much as possible (by inspecting element and fine-tuning `font-weights`, `font-sizes`, `font-family`, `margins` and `paddings`)
- Responsiveness on different screen sizes
- Shadows on hover 
- Deployment on Vercel (pending link)

### How to Start?

`yarn`
`yarn dev` 
