# Dynamic AI-powered Dev Prompter

***Tagline: build.fix.iterate***

******

## Steps

1. Copy the build logs from Github, Netlify, Terminal, Output, any IDE.
2. Paste into textarea of "Dynamic AI-powered Dev Prompter"
3. The "Dynamic AI-powered Dev Prompter" will recommend a tageted fix and enhancement
   base on the current issue.
3. Copy the output as markdown in clipboard or download as csv, md, text.
4. You can now report your identified issue to the team or fix the issue
   or submit to AI for additional input!
5. Optional: Add your Gemini Dev API key for robust output in the API Management Settings.
   Get your API key at https://aistudio.google.com/apikey
   
## Example Output
```
For the code/log I present, I get an error.
Please think step-by-step in order to resolve it without breaking any functionality.
    ```
Blocked request. This host ("183b05a1-f757-48de-89da-fb5e0449a514.lovableproject.com") is not allowed.
To allow this host, add "183b05a1-f757-48de-89da-fb5e0449a514.lovableproject.com" to `server.allowedHosts` in vite.config.js.



src/components/DataImport.tsx(47,31): error TS2739: Type 'MetricCalculation' is missing the following properties from type '{ performance: { impressions: number; clicks: number; spend: number; ctr: number; conversionRate: number; roas: number; }; sales: { totalSales: number; totalOrders: number; }; weeklyMetrics: { period: string; ... 7 more ...; ctr: number; }[]; monthlyMetrics: { ...; }[]; detailedMetrics: { ...; }; }': performance, sales, weeklyMetrics, monthlyMetrics, detailedMetrics
src/components/metrics/KeywordHeatmap.tsx(46,9): error TS2589: Type instantiation is excessively deep and possibly infinite.
src/contexts/ImportContext.tsx(114,18): error TS2345: Argument of type '{ performance: { impressions: any; clicks: any; spend: any; ctr: number; conversionRate: number; roas: number; }; sales: { totalSales: any; totalOrders: any; }; weeklyMetrics: { period: string; impressions: any; ... 6 more ...; ctr: number; }[]; monthlyMetrics: { period: string; impressions: any; ... 6 more ...; ctr...' is not assignable to parameter of type 'SetStateAction<MetricCalculation>'.
src/lib/supabaseClient.ts(22,33): error TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
src/setupTests.ts(24,1): error TS2322: Type 'typeof IntersectionObserver' is not assignable to type '{ new (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver; prototype: IntersectionObserver; }'.
  Types of property 'prototype' are incompatible.
    Type 'IntersectionObserver' is missing the following properties from type 'IntersectionObserver': root, rootMargin, thresholds, takeRecords
src/setupTests.ts(26,10): error TS2339: Property 'callback' does not exist on type 'IntersectionObserver'.
    ```
***Please think step-by-step in order to resolve it without breaking any functionality.***
```

---

