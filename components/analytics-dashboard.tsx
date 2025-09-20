"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
} from "recharts"
import { TrendingUp, Users, ShoppingCart, DollarSign, Target, Download, Filter } from "lucide-react"

// Sample data for customer segments
const customerSegments = [
  { name: "High-Value Loyalists", count: 1247, revenue: 2840000, avgOrder: 285, color: "hsl(var(--chart-1))" },
  { name: "Frequent Shoppers", count: 3521, revenue: 1950000, avgOrder: 155, color: "hsl(var(--chart-2))" },
  { name: "Occasional Buyers", count: 8934, revenue: 1420000, avgOrder: 89, color: "hsl(var(--chart-3))" },
  { name: "Price-Sensitive", count: 5672, revenue: 890000, avgOrder: 67, color: "hsl(var(--chart-4))" },
  { name: "New Customers", count: 2156, revenue: 340000, avgOrder: 78, color: "hsl(var(--chart-5))" },
]

// Monthly revenue data
const monthlyData = [
  { month: "Jan", revenue: 420000, customers: 1250 },
  { month: "Feb", revenue: 380000, customers: 1180 },
  { month: "Mar", revenue: 520000, customers: 1420 },
  { month: "Apr", revenue: 480000, customers: 1350 },
  { month: "May", revenue: 590000, customers: 1580 },
  { month: "Jun", revenue: 650000, customers: 1720 },
  { month: "Jul", revenue: 720000, customers: 1890 },
  { month: "Aug", revenue: 680000, customers: 1760 },
  { month: "Sep", revenue: 750000, customers: 1950 },
  { month: "Oct", revenue: 820000, customers: 2100 },
  { month: "Nov", revenue: 890000, customers: 2280 },
  { month: "Dec", revenue: 950000, customers: 2450 },
]

// Clustering scatter plot data
const clusteringData = [
  { x: 150, y: 12, cluster: "High-Value", size: 8 },
  { x: 89, y: 8, cluster: "Frequent", size: 6 },
  { x: 45, y: 4, cluster: "Occasional", size: 4 },
  { x: 67, y: 3, cluster: "Price-Sensitive", size: 5 },
  { x: 78, y: 2, cluster: "New", size: 3 },
  // Additional data points for realistic clustering
  { x: 165, y: 15, cluster: "High-Value", size: 9 },
  { x: 92, y: 9, cluster: "Frequent", size: 7 },
  { x: 52, y: 5, cluster: "Occasional", size: 4 },
  { x: 71, y: 4, cluster: "Price-Sensitive", size: 5 },
  { x: 82, y: 3, cluster: "New", size: 4 },
]

export function AnalyticsDashboard() {
  const totalRevenue = customerSegments.reduce((sum, segment) => sum + segment.revenue, 0)
  const totalCustomers = customerSegments.reduce((sum, segment) => sum + segment.count, 0)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">eCommerce Analytics 2023</h1>
              <p className="text-muted-foreground">Customer Purchase Analysis & Segmentation</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+12.5%</span> from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCustomers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+8.2%</span> from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${Math.round(totalRevenue / totalCustomers)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+4.1%</span> from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Segments</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customerSegments.length}</div>
              <p className="text-xs text-muted-foreground">Identified clusters</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="segments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="segments">Customer Segments</TabsTrigger>
            <TabsTrigger value="clustering">Clustering Analysis</TabsTrigger>
            <TabsTrigger value="trends">Purchase Trends</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="segments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Segment Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Segment Distribution</CardTitle>
                  <CardDescription>Revenue contribution by segment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={customerSegments}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="revenue"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {customerSegments.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Segment Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Segment Performance</CardTitle>
                  <CardDescription>Key metrics by customer segment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {customerSegments.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                          <span className="font-medium">{segment.name}</span>
                        </div>
                        <Badge variant="secondary">{segment.count.toLocaleString()} customers</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Revenue: </span>
                          <span className="font-medium">${(segment.revenue / 1000000).toFixed(1)}M</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Avg Order: </span>
                          <span className="font-medium">${segment.avgOrder}</span>
                        </div>
                      </div>
                      <Progress value={(segment.revenue / totalRevenue) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clustering" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Clustering Analysis</CardTitle>
                <CardDescription>K-means clustering based on purchase behavior and demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    x: {
                      label: "Average Order Value ($)",
                      color: "hsl(var(--chart-1))",
                    },
                    y: {
                      label: "Purchase Frequency (per month)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid />
                      <XAxis type="number" dataKey="x" name="Average Order Value" unit="$" />
                      <YAxis type="number" dataKey="y" name="Purchase Frequency" unit="/month" />
                      <ChartTooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload
                            return (
                              <div className="bg-card p-3 border rounded-lg shadow-lg">
                                <p className="font-medium">{data.cluster} Customers</p>
                                <p className="text-sm">Avg Order: ${data.x}</p>
                                <p className="text-sm">Frequency: {data.y}/month</p>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Scatter data={clusteringData} fill="hsl(var(--chart-1))" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Purchase Trends</CardTitle>
                <CardDescription>Revenue and customer acquisition trends throughout 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                    customers: {
                      label: "New Customers",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar yAxisId="left" dataKey="revenue" fill="hsl(var(--chart-1))" />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="customers"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    High-Value Loyalists
                  </CardTitle>
                  <CardDescription>Premium customer segment recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Retention Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement VIP loyalty program with exclusive early access to new products and personalized
                      shopping experiences.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Upselling Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      Target with premium product recommendations and bundle offers to increase average order value by
                      15-20%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Price-Sensitive Customers
                  </CardTitle>
                  <CardDescription>Value-focused marketing strategies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Promotional Campaigns</h4>
                    <p className="text-sm text-muted-foreground">
                      Create targeted discount campaigns and flash sales to drive purchase frequency and basket size.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Value Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Emphasize product value, free shipping thresholds, and bulk purchase discounts in marketing
                      messages.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    New Customers
                  </CardTitle>
                  <CardDescription>Onboarding and conversion strategies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Welcome Series</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy automated email sequences with product education, social proof, and first-purchase
                      incentives.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Conversion Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement exit-intent popups and abandoned cart recovery to capture hesitant first-time buyers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-chart-4" />
                    Frequent Shoppers
                  </CardTitle>
                  <CardDescription>Engagement and loyalty building</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Personalization</h4>
                    <p className="text-sm text-muted-foreground">
                      Leverage purchase history for AI-powered product recommendations and personalized homepage
                      experiences.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Community Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Create customer community features like reviews, wishlists, and referral programs to increase
                      engagement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
