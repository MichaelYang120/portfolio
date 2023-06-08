import React, { Component } from 'react'

export async function getBlogDetails() {
    let url = "https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries"
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(
        res => res.json()
    ).then(json => (json))

    return response;
}

export async function updatePost(data:any, postId:string|null) {
    try {
        const response = await fetch(`https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
      console.log(JSON.stringify(data))

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

export async function deletePost(postId:string|null) {
    try {
        const response = await fetch(`https://us-central1-portfolio-f4982.cloudfunctions.net/app/entries/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}