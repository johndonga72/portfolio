import React from "react";
import "./ProblemSolving.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

const ProblemSolving = () => {
    // Bar chart data (Problems solved per platform)
    const platformData = [
        { name: "LeetCode", problems: 100 },
        { name: "StarScrach SQL", problems: 36 },
        { name: "StarScrach Python", problems: 16 }
    ];

    // Donut chart data (Category-wise focus)
    const categoryData = [
        { name: "DSA (LeetCode)", value: 100 },
        { name: "SQL (StarScrach)", value: 36 },
        { name: "Python (StarScrach)", value: 16 }
    ];

    const COLORS = ["#3498db", "#2ecc71", "#f39c12"];

    return (
        <section className="problem-section" id="problemsolving">
            <h2 className="problem-title">🧠 Problem-Solving & Competitive Practice</h2>

            <div className="profile-links">
                <a
                    href="https://leetcode.com/u/JOHN_DONGA/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 View LeetCode Profile
                </a>
                <a
                    href="https://platform.stratascratch.com/user/johndonga72"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 View StarScrach Profile
                </a>
            </div>

            {/* Charts Section */}
            <div className="chart-container">
                <div className="chart-card">
                    <h3>📊 Problems Solved per Platform</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={platformData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="problems" fill="#3498db" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-card">
                    <h3>🍩 Category Focus</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                innerRadius={60}
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="problem-container">
                <div className="problem-card">
                    <h3>LeetCode</h3>
                    <p className="problem-count">100+ Problems Solved</p>
                    <p>
                        Focused on DSA — arrays, linked lists, trees, stacks, queues, recursion problems,
                        and optimization.
                    </p>
                </div>

                <div className="problem-card">
                    <h3>StarScrach SQL</h3>
                    <p className="problem-count">36 Problems Solved</p>
                    <p>
                        Solved real data analysis queries — joins, subqueries, and window
                        functions.
                    </p>
                </div>

                <div className="problem-card">
                    <h3>StarScrach Python</h3>
                    <p className="problem-count">16 Problems Solved</p>
                    <p>
                        Focused on pandas, data cleaning, and exploratory data analysis for
                        analytics tasks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
