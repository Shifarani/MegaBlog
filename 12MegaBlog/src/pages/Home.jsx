import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 mt-6 text-center bg-white">
                <Container>
                    <h1 className="text-2xl md:text-3xl font-semibold text-pink-500">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-10 bg-white min-h-screen">
            <Container>
                <div className="flex flex-wrap justify-center -mx-2">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home