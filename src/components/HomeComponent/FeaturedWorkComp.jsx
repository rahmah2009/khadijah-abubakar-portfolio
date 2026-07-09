import React from 'react'
import TitleComp from '../common/TitleComp'
import FeatureWorksCardComp from './FeatureWorksCardComp'

const FeaturedWorksComp = () => {
  return (
    <section className='w-full max-w-[856px] mx-auto h-auto py-12 px-4 sm:px-0'>
      <div className='w-full flex flex-col gap-6'>
        
        <div className='w-full flex items-start mb-2'>
          <TitleComp title='Featured works' />
        </div>

        <div className='flex flex-col h-auto gap-8 sm:gap-4'>
          
          <FeatureWorksCardComp 
            title='AI-Driven Heart Disease Risk Prediction & Deployment' 
            img='/assets/AI-Driven Heart Disease.jpeg' 
            label='Machine Learning, Healthcare' 
            btnContent='2026' 
            content='Developed an end-to-end classification pipeline using Python and Scikit-Learn to assess cardiac risk with a 98% prediction accuracy. Implemented advanced hyperparameter tuning via GridSearchCV to optimize recall metrics, minimizing false negatives, and deployed the final model as an interactive Streamlit application for clinical use cases.'
          />

          <FeatureWorksCardComp 
            title='IoT-Enabled Crop Recommendation Engine' 
            img='/assets/IoT.jpeg' 
            label='Predictive Analytics, Smart Agriculture' 
            btnContent='2026' 
            content='Architected a machine learning system achieving 99% accuracy to recommend optimal crop choices based on real-time soil chemistry (NPK, pH) and environmental factors. Built a scalable data ingestion layer capable of processing automated data directly from physical IoT sensors as well as manual web form inputs.'
          />

          <FeatureWorksCardComp 
            title='Scalable Telecom Customer Churn Forecasting Model' 
            img='/assets/AI_model.jpeg' 
            label='Time-Series Analysis, Predictive Modeling' 
            btnContent='2025' 
            content='Engineered a predictive analytics model utilizing historical customer behavior datasets to identify churn risks. Built rolling aggregation windows and complex feature engineering layers to isolate high-risk customer segments, enabling marketing teams to deploy proactive retention campaigns before user accounts deactivated.' 
          />
          
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorksComp