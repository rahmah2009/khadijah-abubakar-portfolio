import BlogPost from '@/components/Blog/BlogPost'
import React from 'react'

// 1. Centralized Data Object with Fixed Unique IDs and Descriptions
const BLOG_POSTS = [
  {
    id: 'heart-disease-prediction',
    title: 'Building a Heart Disease Prediction API from Scratch',
    date: '12 Feb 2025',
    tags: 'Machine Learning, Healthcare, Streamlit',
    description: 'Engineered an end-to-end classification pipeline using Python and Scikit-Learn to achieve 98% prediction accuracy. Optimized the model’s recall metrics using GridSearchCV to minimize false negatives and deployed the result via a Streamlit web interface.'
  },
  {
    id: 'crop-recommendation-engine', // 👈 FIXED: Changed duplicate ID to match the content
    title: 'Building a Crop Recommendation Engine',
    date: '12 Feb 2024',
    tags: 'Predictive Modeling, IoT',
    description: 'Developed an accurate predictive model determining optimal crop varieties based on contextual soil and weather metrics. Leveraged multi-class classification to support agricultural data distribution models.'
  },
  {
    id: 'agricultural-yield-iot',
    title: 'Optimizing Agricultural Yield with IoT and AI',
    date: '28 Jan 2026',
    tags: 'Predictive Modeling, Data Engineering, IoT',
    description: 'Engineered an agricultural crop recommendation engine achieving 99% accuracy by analyzing soil metrics and environmental factors. Built a dual-input ingestion layer that seamlessly processes automated IoT sensor streams alongside manual inputs for low-resource environments.'
  },
  {
    id: 'sql-data-cleaning',
    title: 'Advanced SQL Strategies for Large-Scale Data Cleaning',
    date: '05 Nov 2025',
    tags: 'SQL, Data Engineering, Database Optimization',
    description: 'A deep dive into writing high-performance SQL queries for handling millions of rows of messy, real-world data. Explores CTEs, window functions, and query execution plans used to isolate outliers and standardize structural formatting prior to training ML models.'
  },
  {
    id: 'telecom-metrics-dashboards',
    title: 'Translating Raw Telecom Metrics into Interactive Executive Insights',
    date: '18 Aug 2026',
    tags: 'Power BI, Data Visualization, Excel',
    description: 'An analytical walkthrough showcasing how to structure an intuitive business dashboard from raw stakeholder datasets. Highlights advanced DAX modeling, custom dashboard interactivity, and practical strategies for data storytelling that drive executive decision-making.'
  },
  {
    id: 'automated-resume-screener',
    title: 'Architecting an Automated Resume Screener Using Advanced NLP Pipelines',
    date: '14 Nov 2025',
    tags: 'NLP, Python, Text Analytics',
    description: 'A step-by-step blueprint detailing how to leverage regular expressions, tokenization, and TF-IDF vectorization to scan and categorize text datasets. Highlights practical methods for extracting specific skills, assessing semantic similarity, and parsing structured entities from unstructured documents.'
  },
  {
    id: 'ecommerce-customer-churn',
    title: 'Demystifying E-Commerce Customer Churn with Time-Series Forecasting',
    date: '02 Jun 2025',
    tags: 'Predictive Analytics, Time-Series, Scikit-Learn',
    description: 'An in-depth exploration of feature engineering for time-dependent user behavior data. Demonstrates how to handle temporal trends, build rolling aggregation windows, and train ensemble models to isolate high-risk customer segments before they deactivate their accounts.'
  },
  {
    id: 'ab-testing-frameworks',
    title: 'A/B Testing Frameworks: Designing Data-Driven Product Experiments',
    date: '19 Jan 2025',
    tags: 'Statistics, Experimentation, Hypothesis Testing',
    description: 'A technical guide outlining how to structure statistically sound product experiments from scratch. Covers sample size determination using power analysis, managing Type I and Type II errors, and executing p-value and confidence interval validation to back up product decisions.'
  }
];

const Blog = () => {
  return (
    // Updated px-4 sm:px-6 md:px-0 so the layout matches your tablet container padding beautifully
    <main className="w-full max-w-2xl mx-auto py-10 px-4 sm:px-6 md:px-0">
      
      {/* Portfolio Title Anchor */}
      <h1 className="text-3xl text-[#7C3AED] font-bold mb-10 transition-colors duration-200">
        Blog
      </h1>
      
      {/* 2. Dynamic Component Mapping Loop */}
      <div className="flex flex-col">
        {BLOG_POSTS.map((post, index) => (
          <React.Fragment key={post.id}>
            <BlogPost
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
            />
            {/* Conditional execution: Hides the very last divider line for cleaner layout typography */}
            {index < BLOG_POSTS.length - 1 && (
              <hr className="border-[#E0E0E0] opacity-50 my-5" /> 
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  )
}

export default Blog