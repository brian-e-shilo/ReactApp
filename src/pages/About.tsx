import React from "react";

const About: React.FC = () => (
  <div>
    <h2>About Page - What I Learned in React</h2>

    <section>
      <h3>1. React Basics</h3>
      <ul>
        <li>What is React and why it’s used.</li>
        <li>JSX syntax to write HTML in JavaScript.</li>
        <li>React elements and how to render them.</li>
      </ul>
    </section>

    <section>
      <h3>2. Components</h3>
      <ul>
        <li>Functional components vs class components.</li>
        <li>Props for passing data to components.</li>
        <li>Working with lists and keys in React.</li>
        <li>Fragments to avoid extra HTML wrappers.</li>
      </ul>
    </section>

    <section>
      <h3>3. State & Hooks</h3>
      <ul>
        <li>useState for local state management.</li>
        <li>useReducer for more complex state logic.</li>
        <li>useEffect for side effects (e.g., updating document title).</li>
        <li>useMemo for expensive calculations caching.</li>
        <li>useCallback to memoize functions and avoid re-renders.</li>
        <li>Custom hooks like TaskManager for reusable logic.</li>
      </ul>
    </section>

    <section>
      <h3>4. Forms</h3>
      <ul>
        <li>Controlled components to manage input values.</li>
        <li>Handling input changes and updates with state.</li>
        <li>Building reusable form components.</li>
      </ul>
    </section>

    <section>
      <h3>5. Routing</h3>
      <ul>
        <li>React Router v6 to manage multiple pages.</li>
        <li>Using Routes and Route to define paths.</li>
        <li>Link component to navigate between pages.</li>
      </ul>
    </section>

    <section>
      <h3>6. Project Setup</h3>
      <ul>
        <li>Created project with Create React App using TypeScript template.</li>
        <li>Organized files into components and pages.</li>
        <li>Applied CSS styling for clean layout.</li>
        <li>Implemented reusable Header, Footer, Counter, ColorPicker, TaskManager components.</li>
      </ul>
    </section>

    <section>
      <h3>7. Extra Concepts</h3>
      <ul>
        <li>useMemo and useCallback to optimize performance.</li>
        <li>useEffect dependency array to control updates.</li>
        <li>LocalStorage usage to persist data (TaskManager example).</li>
        <li>Dynamic content updates without page reloads.</li>
      </ul>
    </section>
  </div>
);

export default About;
