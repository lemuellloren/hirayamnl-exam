'use client'

import Image from 'next/image'

const Projects = ({ heading = 'Key Projects' }) => {

    const projects = [
        {
            id: '1',
            image: '/images/p3.jpg',
            title: 'Civil Engineering',
            subtitle: 'Seremban Middle Ring Road (MRSS)',
        },
        {
            id: '2',
            image: '/images/p4.jpg',
            title: 'Property Development',
            subtitle: 'Istana Negara',
        },
        {
            id: '3',
            image: '/images/p5.jpg',
            title: 'Constraction - Building',
            subtitle: 'Tropicana Cenang',
        },
    ]

    return (
        <div className="projects relative bg-white">
            <div className="slantBgProject bg-primary-blue px-5 md:px-10 py-36 md:py-80 bg-center bg-no-repeat bg-cover" style={{
                backgroundImage: "linear-gradient(0deg, rgb(255 255 255 / 30%), rgb(255 255 255 / 30%)), url('/images/project-bg.jpg')",
            }}>
                <div className="container mx-auto">
                    <h2 className="text-primary-blue uppercase text-2xl md:text-5xl font-bold text-center tracking-widest mb-28">{heading}</h2>
                </div>
                <div className="lg:grid lg:grid-cols-3 gap-10">
                    {projects && projects.map((project) => (
                        <div className="text-center mb-10 lg:mb-0"
                            key={project.id}>
                            <Image
                                className="grayscale hover:grayscale-0 mx-auto rounded-full w-52 h-52 rounded-full mb-10"
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={300}
                            />
                            <h3 className="uppercase text-primary-blue text-lg font-bold tracking-widest">
                               {project.title}
                            </h3>
                            <p className="text-secondary-blue text-lg">
                               {project.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}


export default Projects
