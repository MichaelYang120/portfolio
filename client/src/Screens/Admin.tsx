import React from 'react';

function Admin() {
  return (
    <>
        <div
            style={{
                display:"flex",
                flexDirection:"column"
            }}
        >
            <a href="/admin-blog">Submit New Blog</a>
            <a href="/previewblog">Preview Blog</a>
            <a href="/">View Home Page</a>
        </div>
    </>
  );
}

export default Admin;