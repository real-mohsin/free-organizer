# ChartCard

A reusable container component for displaying charts and other visual data.

`ChartCard` provides a consistent layout with a heading, optional subtitle, optional actions, and a flexible content area. It is intentionally chart-library agnostic, allowing any chart or visualization component to be rendered as its content.

---

## Features

* Consistent card layout
* Optional subtitle
* Optional header actions
* Flexible content using `children`
* Built on top of the shared `Card` component
* Supports custom styling through `className`

---

## Usage

### Basic

```tsx
<ChartCard
    heading="Revenue"
>
    <RevenueChart />
</ChartCard>
```

---

### With Subtitle

```tsx
<ChartCard
    heading="Revenue"
    subtitle="Last 6 Months"
>
    <RevenueChart />
</ChartCard>
```

---

### With Actions

```tsx
<ChartCard
    heading="Revenue"
    subtitle="Last 6 Months"
    actions={
        <Button
            variant="ghost"
            size="sm"
        >
            Export
        </Button>
    }
>
    <RevenueChart />
</ChartCard>
```

---

### Empty State

```tsx
<ChartCard
    heading="Revenue"
>
    <EmptyState
        title="No data available"
        description="Revenue data will appear once payments are recorded."
    />
</ChartCard>
```

---

### Loading State

```tsx
<ChartCard
    heading="Revenue"
>
    <ChartSkeleton />
</ChartCard>
```

---

## Props

| Prop     | Type      | Required | Description                                 |
| -------- | --------- | -------- | ------------------------------------------- |
| heading  | ReactNode | Yes      | Card heading                                |
| subtitle | ReactNode | No       | Supporting text displayed below the heading |
| actions  | ReactNode | No       | Optional header actions                     |
| children | ReactNode | Yes      | Chart or any custom content                 |

---

## Design Principles

`ChartCard` does not know anything about charts.

Its responsibility is only to provide a consistent layout and presentation. The chart implementation is supplied through the `children` prop, making the component compatible with any visualization library.

---

## Used In

* Dashboard
* Reports
* Analytics
* Financial Overview
* Client Insights

---

## Notes

`ChartCard` is a composed component built using the shared design system.

It should be used whenever a page needs to present charts, graphs, visualizations, loading states, or empty states inside a consistent card layout.
