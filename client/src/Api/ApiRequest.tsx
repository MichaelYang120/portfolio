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