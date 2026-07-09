
import React from 'react'
import WorkPage from '@/components/Work/work'


const Work = () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto '>
      <div className='w-full sm:w-[856px] mx-auto'>
        <h1 className="text-3xl text-[#21243D] font-bold mb-10">Work</h1>

        <div className='flex flex-col h-auto gap-6'>

          <WorkPage title='AI-Driven Heart Disease Risk Prediction & Deployment' img='/assets/AI-Driven Heart Disease.jpeg' label='Machine Learning' btnContent='2026' content='Developed an end-to-end classification pipeline using Python and Scikit-Learn to assess cardiac risk with a 98% prediction accuracy. Implemented advanced hyperparameter tuning via GridSearchCV to optimize recall metrics, minimizing false negatives, and deployed the final model as an interactive Streamlit application for clinical use cases.' />

          <WorkPage title=' IoT-Enabled Crop Recommendation Engine' img='/assets/IoT.jpeg' label='Predictive Analytics, Smart Agriculture, Data Engineering' btnContent='2026' content='Architected a machine learning system achieving 99% accuracy to recommend optimal crop choices based on real-time soil chemistry (NPK, pH) and environmental factors. Built a scalable data ingestion layer capable of processing automated data directly from physical IoT sensors as well as manual web form inputs'/>

          <WorkPage title='Scalable Telecom Customer Churn Forecasting Model' img='/assets/AI_model.jpeg' label='Time-Series Analysis, Predictive Modeling, Python' btnContent='2025' content='Engineered a predictive analytics model utilizing historical customer behavior datasets to identify churn risks. Built rolling aggregation windows and complex feature engineering layers to isolate high-risk customer segments, enabling marketing teams to deploy proactive retention campaigns before user accounts deactivated.' />
          
          <WorkPage title='Interactive Executive Dashboards for Revenue Intelligence' img='/assets/Smart_Money.jpeg' label='Power BI, Data Visualization, Advanced SQL' btnContent='2026' content='Translated millions of rows of unformatted transactional telemetry into a clean relational schema using complex SQL window functions and CTEs. Visualized the resulting metrics inside an interactive Power BI suite using advanced DAX modeling, providing executive stakeholders with automated data storytelling that optimized quarterly decision-making.'/>
        </div>
      </div>

    </section>
  )
}
export default Work
