import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="p-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                            <span className="font-medium text-gray-900">{blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <Link
                                to="/"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                View More Articles
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetails;
