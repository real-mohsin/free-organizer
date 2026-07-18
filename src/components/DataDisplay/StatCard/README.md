# StatCard

A reusable data display component for presenting a single key metric.

The component is built on top of the shared `Card` component and follows the Free Organizer design system.

---

## Features

* Displays a primary metric
* Optional icon
* Optional footer
* Optional actions
* Supports custom styling through `className`
* Fully reusable across the application

---

## Usage

```tsx
<StatCard
    heading="Revenue"
    value="$4,250"
/>
```

### With Footer

```tsx
<StatCard
    heading="Revenue"
    value="$4,250"
    footer="+12% compared to last month"
/>
```

### With Icon

```tsx
import { DollarSign } from "lucide-react";

<StatCard
    heading="Revenue"
    value="$4,250"
    footer="+12% compared to last month"
    icon={<DollarSign size={18} />}
/>
```

### With Actions

```tsx
import { Button } from "../Button";

<StatCard
    heading="Revenue"
    value="$4,250"
    actions={
        <Button
            size="sm"
            variant="ghost"
        >
            View
        </Button>
    }
/>
```

---

## Props

| Prop    | Type      | Required | Description                       |
| ------- | --------- | -------- | --------------------------------- |
| heading | ReactNode | Yes      | Card heading                      |
| value   | ReactNode | Yes      | Primary metric                    |
| footer  | ReactNode | No       | Supporting information            |
| icon    | ReactNode | No       | Icon displayed before the heading |
| actions | ReactNode | No       | Optional action area              |

---

## Used In

* Dashboard
* Clients
* Projects
* Reports
* Analytics

---

## Notes

`StatCard` is a composed component built using the shared design system components.

It should be used whenever a page needs to display a single KPI or business metric in a consistent way.
