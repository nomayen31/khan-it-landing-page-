import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';

const BlogSection = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="blog">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-md text-sm font-medium mb-4">
                            Insights & Resources
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Latest News & Articles
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Stay ahead in the fast-changing world of SEO and digital marketing. At Khan IT,
                            we regularly publish guides, industry updates, and success stories to help
                            businesses make smarter digital decisions.
                        </p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                        View All Articles
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Article - Large Card */}
                    <Link
                        to={`/blog/${blogs[0].id}`}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                <span className="font-medium text-gray-900">{blogs[0].author}</span>
                                <span>•</span>
                                <span>{blogs[0].date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {blogs[0].title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {blogs[0].excerpt}
                            </p>
                            <span className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </Link>

                    {/* Right Column - Smaller Cards */}
                    <div className="space-y-6">
                        {blogs.slice(1).map((blog) => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.id}`}
                                className="block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                            >
                                <div className="flex gap-4 p-4">
                                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <span className="font-medium text-gray-900">{blog.author}</span>
                                            <span>•</span>
                                            <span>{blog.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {blog.excerpt}
                                        </p>
                                        <span className="text-blue-600 font-medium text-sm inline-flex items-center group-hover:text-blue-700 transition-colors">
                                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
