import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mx-12 bg-blue-200'>
            <h1 className='font-bold text-2xl mb-11 px-5 text-5xl'>Ques.🗞️& Ans.📑</h1>
            <div>
            <h1 className='font-bold text-xl mb-5'>What is context api❓</h1>
            <p>There many hooks are introduced in the 2 or 3 earlier versions of REACT.
Context Api is a special kind of hooks <br />
Context Api replaces Redux
Context Api solves deep prop-drilling <br />
Before Context Api if we want share state with deeply nested components we had share the state via props of every child components. That was very painful
<br />
*When we have Context Api, we wrap parent component with a provider provided by context Api
And we also export the context to use it on other places <br />
.At last in this way we can share our states without the pain of props-drilling
</p>
            </div>
            <div className='my-10'>
            <h1 className='font-bold text-xl mb-5'>
            what is symantic tag❓
            </h1>
            <p>
           1.Semantic Tags indicates what they actually are <br />
           2.Semantic Elements provide the real meaning to browser and to the coders <br />
           3.Bold tag doesn't mean anything except displaying something on the webpage <br />
           4.But for example, 'p'* Paragraph element gives us the proper meaning to it's tagname and it clearly tells us to be a paragraph <br />
           5.And also helps the browser to render the p* tag as a paragraph <br />
           ...There are many semantic tags introduces in HTML5
header, footer, main, section. article, aside, etc
            </p>
            </div>
            <div>
                <h1 className='font-bold text-xl mb-5'>
                Defferent between block Vs - inlineBlock❓
                </h1>
            </div>
        </div>
    );
};

export default Blog;
