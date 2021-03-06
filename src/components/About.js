import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import bkg from './image/space.jpeg'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

 export default  function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
			name,
			bio,
			"authorImage": image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>Loading . . . </div>;

	return (
		<main className="relative">
			<img
				src={bkg}
				alt="waves crashing against a sandy beach"
				className="absolute w-screen h-screen"
			/>
			<div className="p-10 lg:pt-10 container mx-auto relative">
				<section className="bg-gray-400 rounded-lg shadow-2xl lg:flex p-10 md:flex p-5">
					<img
						src={urlFor(author.authorImage).url()}
						className="rounded lg:w-48 h-60 mr-8 md:w-12 h-12"
						alt={author.name}
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="cursive text-6xl text-green-600 mb-4 md: mt-2 float-right">
							Hey there. I'm  <span className="text-green-100">{author.name}</span>
						</h1>
						<div className="prose lg:prose-xl text-white">
							<BlockContent
								blocks={author.bio}
								projectId="75olqk0o"
								dataset="production"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

