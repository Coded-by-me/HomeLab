/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7PaHTfxKRtJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

 import { Arimo } from 'next/font/google'
 import { Chivo } from 'next/font/google'

 arimo({
 subsets: ['latin'],
 display: 'swap',
 })

 chivo({
 subsets: ['latin'],
 display: 'swap',
 })

 To read more about using these font, please visit the Next.js documentation:
 - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 **/
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import StarIcon from "./ui/icon/starIcon"
import {CalendarIcon, ClockIcon, EyeIcon} from "lucide-react"

export function Main() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1">
                <section className="bg-gradient-to-r from-[#5f6caf] to-[#49a09d] py-20 sm:py-32">
                    <div className="container flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Discover the Best Developer Projects
                        </h1>
                        <p className="max-w-3xl text-center text-lg text-white/80 sm:text-xl">
                            Explore a curated collection of innovative projects by talented developers and gain valuable
                            insights to
                            inspire your own work.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Input
                                type="search"
                                placeholder="Search projects..."
                                className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:outline-none sm:w-auto"
                            />
                            <Button className="w-full sm:w-auto">Explore Projects</Button>
                        </div>
                    </div>
                </section>
                <section className="py-12 sm:py-20">
                    <div className="container px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
                            <Link href="#" className="text-sm font-medium text-primary hover:underline"
                                  prefetch={false}>
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder.svg"
                                            width={48}
                                            height={48}
                                            alt="Project Logo"
                                            className="rounded-full"
                                            style={{aspectRatio: "48/48", objectFit: "cover"}}
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold">Project X</h3>
                                            <p className="text-sm text-muted-foreground">by John Doe</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        A revolutionary new tool for developers to streamline their workflow.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <span className="text-sm text-muted-foreground">4.8</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <EyeIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">1.2K</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder.svg"
                                            width={48}
                                            height={48}
                                            alt="Project Logo"
                                            className="rounded-full"
                                            style={{aspectRatio: "48/48", objectFit: "cover"}}
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold">Project Y</h3>
                                            <p className="text-sm text-muted-foreground">by Jane Smith</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        A cutting-edge AI-powered platform for data analysis and visualization.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <span className="text-sm text-muted-foreground">4.5</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <EyeIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">950</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder.svg"
                                            width={48}
                                            height={48}
                                            alt="Project Logo"
                                            className="rounded-full"
                                            style={{aspectRatio: "48/48", objectFit: "cover"}}
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold">Project Z</h3>
                                            <p className="text-sm text-muted-foreground">by Alex Johnson</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        A mobile app that revolutionizes the way you manage your personal finances.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <span className="text-sm text-muted-foreground">4.2</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <EyeIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">800</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="bg-muted py-12 sm:py-20">
                    <div className="container px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold sm:text-3xl">Insights</h2>
                            <Link href="#" className="text-sm font-medium text-primary hover:underline"
                                  prefetch={false}>
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <img
                                        src="/placeholder.svg"
                                        width={640}
                                        height={360}
                                        alt="Insight Image"
                                        className="rounded-t-md"
                                        style={{aspectRatio: "640/360", objectFit: "cover"}}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-bold">The Future of Web Development</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Explore the latest trends and technologies shaping the future of web
                                        development.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">June 15, 2024</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <ClockIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">10 min read</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <img
                                        src="/placeholder.svg"
                                        width={640}
                                        height={360}
                                        alt="Insight Image"
                                        className="rounded-t-md"
                                        style={{aspectRatio: "640/360", objectFit: "cover"}}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-bold">Mastering Responsive Design</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Learn how to create stunning and accessible websites that adapt to any device.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">May 28, 2024</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <ClockIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">15 min read</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <img
                                        src="/placeholder.svg"
                                        width={640}
                                        height={360}
                                        alt="Insight Image"
                                        className="rounded-t-md"
                                        style={{aspectRatio: "640/360", objectFit: "cover"}}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-bold">Lorem ipsum</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Discover how AI-powered tools can revolutionize your web development workflow.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">April 20, 2024</span>
                                        <Separator orientation="vertical" className="h-4"/>
                                        <ClockIcon className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">12 min read</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-12 sm:py-20">
                    <div className="container px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold sm:text-3xl">About ProjectHub</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    ProjectHub is a platform dedicated to showcasing the best developer projects and
                                    sharing valuable
                                    insights from industry experts. Our mission is to inspire and empower developers to
                                    push the
                                    boundaries of what's possible in web development.
                                </p>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    We believe that by sharing knowledge and highlighting innovative projects, we can
                                    foster a vibrant
                                    community of developers who are passionate about creating amazing digital
                                    experiences. Join us on this
                                    journey as we explore the cutting edge of web development and uncover the stories
                                    behind the projects
                                    that are shaping the future.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width={640}
                                    height={360}
                                    alt="About ProjectHub"
                                    className="rounded-md"
                                    style={{aspectRatio: "640/360", objectFit: "cover"}}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}