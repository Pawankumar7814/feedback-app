import React from 'react';

// function App(){
//     return React.createElement('div',{className:"container"},
//     React.createElement('h1',{},'My App')
//     )
// }

function App() {
    const title = 'Blog Post';
    const body = "This is my blog post";
    // const comment = [
    //     { id: 1, text: 'Comment One' },
    //     { id: 2, text: 'Comment two' },
    //     { id: 3, text: 'Comment three' },
    //     { id: 4, text: 'Comment four' }
    // ];

//     const loading = false;
//     const showComments = true;
//     const commentBlock= (<div className='comment'>
//     Comments ({comment.length})
//     <ul>
//         {comment.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//         ))}
//     </ul>
// </div>);

    // if (loading) {
    //     return <h1> Loading...</h1>
    // }

    return (
        <>
            <h1 className="container">{title}</h1>
            <p>{body} This is how we display the data of variable</p>
            {/* {showComments && commentBlock} */}
        </>
    );
}

export default App;