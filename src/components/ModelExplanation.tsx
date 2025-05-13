
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ModelExplanation = () => {
  return (
    <section className="container px-4 md:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Our Machine Learning Model</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our house price prediction model uses advanced machine learning techniques to analyze property data and provide accurate price estimates. Here's how it works:
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Data Collection & Processing</h3>
            <p className="text-gray-600">
              We've collected data from multiple real estate sources, including sales records, property listings, and government databases. This data undergoes rigorous cleaning and preprocessing to ensure accuracy.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Feature Engineering</h3>
            <p className="text-gray-600">
              Our model analyzes over 50 different features related to a property, including physical characteristics, location data, market trends, and more. We use advanced feature engineering techniques to extract the most relevant information.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Model Architecture</h3>
            <p className="text-gray-600">
              We utilize an ensemble of algorithms including gradient boosting machines, neural networks, and random forests to achieve the highest possible prediction accuracy.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Validation & Continuous Improvement</h3>
            <p className="text-gray-600">
              Our model is continuously trained on new data and validated against actual sales prices. This ensures that predictions remain accurate as market conditions change over time.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="python" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="libraries">Libraries</TabsTrigger>
            <TabsTrigger value="code">Code Sample</TabsTrigger>
          </TabsList>
          <TabsContent value="python" className="p-4 border rounded-md mt-2 bg-gray-50">
            <p className="text-gray-700">
              Our model is primarily built with Python, which is the industry standard for data science and machine learning applications. Python's rich ecosystem of libraries makes it ideal for data processing, model training, and deployment.
            </p>
          </TabsContent>
          <TabsContent value="libraries" className="p-4 border rounded-md mt-2 bg-gray-50">
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>NumPy & Pandas - For data manipulation and analysis</li>
              <li>Scikit-learn - For implementing machine learning models</li>
              <li>TensorFlow & Keras - For deep learning components</li>
              <li>XGBoost - For gradient boosting frameworks</li>
              <li>Matplotlib & Seaborn - For data visualization</li>
            </ul>
          </TabsContent>
          <TabsContent value="code" className="p-4 border rounded-md mt-2 bg-gray-50">
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
              {"# Sample code snippet from our model training process\nimport pandas as pd\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_absolute_error\n\n# Load and prepare the dataset\ndf = pd.read_csv('housing_data.csv')\nX = df.drop('price', axis=1)\ny = df['price']\n\n# Split the data\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42)\n\n# Train a Random Forest model\nmodel = RandomForestRegressor(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# Evaluate the model\npredictions = model.predict(X_test)\nmae = mean_absolute_error(y_test, predictions)\nprint(f\"Model MAE: ${mae:.2f}\")\n\n# Feature importance\nfeature_importance = pd.DataFrame({\n    'feature': X.columns,\n    'importance': model.feature_importances_\n}).sort_values('importance', ascending=False)\n\nprint(\"Top 5 most important features:\")\nprint(feature_importance.head(5))"}
            </pre>
          </TabsContent>
        </Tabs>
        
        <Card className="mt-12 bg-blue-50 border-blue-100">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Commitment to Transparency</h3>
            <p className="text-gray-700">
              We believe in transparency and reproducibility. While our full model is proprietary, we provide detailed documentation about our methodology and feature importance. We continuously work to eliminate bias and ensure fair predictions across all neighborhoods and property types.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ModelExplanation;
