import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mx-auto my-10'>
                <h2 className='text-4xl font-semibold text-gray-400 my-7 text-center'>Question and Answer</h2>
                <div className='grid lg:grid-cols-2 gap-4 text-gray-400 text-start font-medium mx-3'>
                    <div className='p-3 rounded-lg border-2 hover:border-warning transition-colors duration-1000 hover:text-gray-500'>
                        <p>1: Tell us the differences between uncontrolled and controlled components.</p>
                        <p>Ans: Uncontrolled components and controlled components offer different approaches for managing form inputs in React. Uncontrolled components rely on the DOM to handle state management, whereas controlled components handle state within the React component. The decision between the two depends on the specific needs of the form, including its complexity, required control, and desired flexibility for form interactions and validations.</p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-warning transition-colors duration-1000 hover:text-gray-500'>
                        <p>2: How to validate React props using PropTypes ?</p>
                        <p>Ans: Import the PropTypes module from the 'prop-types' library.
                            Declare the PropTypes for your component by adding a propTypes property to your component class or functional component.
                            Define the prop types using the available validators provided by PropTypes.
                            Use validators like string, number, bool, array, object, func, and more to validate the prop types.
                            You can also use modifiers like isRequired to make certain props mandatory.
                            PropTypes help catch potential issues early during development, ensuring your React components are robust and maintainable.



                        </p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-warning transition-colors duration-1000 hover:text-gray-500'>
                        <p>3: Tell us the difference between nodejs and express js.</p>
                        <p>Ans: Node.js serves as a runtime environment for executing server-side JavaScript, while Express.js acts as a web application framework that simplifies the development of web applications and APIs on top of Node.js. With Node.js, JavaScript code can be run outside the browser, leveraging its event-driven, non-blocking I/O model. Express.js, on the other hand, provides a set of tools and abstractions that streamline tasks like routing, request handling, response management, and middleware integration. This combination of Node.js and Express.js creates a robust and adaptable ecosystem for developing server-side JavaScript applications, including web applications and RESTful APIs.</p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-warning transition-colors duration-1000 hover:text-gray-500'>
                        <p>4: What is a custom hook, and why will you create a custom hook?</p>
                        <p>Ans:  Custom hook is a JavaScript function in React that allows you to encapsulate reusable logic and share it between multiple components. Custom hooks promote code reuse, abstraction of logic, and better code organization. They enable you to extract complex logic into a separate hook, keeping components focused on rendering UI. Custom hooks are useful for sharing stateful logic, simplifying testing, and improving code maintainability. By creating custom hooks, you can modularize your codebase, enhance reusability, and make development more efficient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;