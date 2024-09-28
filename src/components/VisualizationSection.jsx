// src/components/VisualizationSection.jsx
import React from 'react';
import './VisualizationSection.css'; // Import CSS for styling

const VisualizationSection = () => {
    return (
        <div className="visualization-section">
            <h2>Make Your Data Visualize</h2>
            <p>Make your data visualize</p>
            <div className="media-container">
                <img src="/path/to/your/image.jpg" alt="Data Visualization" />
                <img src="/path/to/your/gif.gif" alt="Data GIF" />
            </div>
        </div>
    );
};

export default VisualizationSection;