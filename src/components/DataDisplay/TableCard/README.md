# TableCard

`TableCard` is a reusable data display component used to present tabular information inside a consistent card layout.

It provides a standardized header with a heading, optional subtitle, and optional actions, while allowing any table or table-like component to be rendered as its content.

---

## Purpose

Use `TableCard` whenever tabular data needs to be displayed within a dashboard or application page.

Typical examples include:

* Recent Payments
* Recent Clients
* Upcoming Invoices
* Active Projects
* Task Lists
* Reports

---

## Features

* Consistent card layout
* Heading and optional subtitle
* Optional action area
* Flexible content through composition
* Supports custom styling through `className`
* Automatically handles horizontal overflow for wide tables

---

## Props

| Prop        | Type        | Required | Description                                              |
| ----------- | ----------- | -------- | -------------------------------------------------------- |
| `heading`   | `ReactNode` | ✅        | Card heading                                             |
| `subtitle`  | `ReactNode` | No       | Optional supporting text                                 |
| `actions`   | `ReactNode` | No       | Optional action buttons or links displayed in the header |
| `children`  | `ReactNode` | ✅        | Table or table-like content                              |
| `className` | `string`    | No       | Additional CSS classes                                   |

---

## Basic Usage

```tsx
<TableCard
    heading="Recent Payments"
    subtitle="Last 30 days"
>

    <Table
        columns={columns}
        data={payments}
    />

</TableCard>
```

---

## With Header Actions

```tsx
<TableCard
    heading="Clients"
    subtitle="Active Clients"
    actions={
        <Button
            size="sm"
            variant="secondary"
        >
            View All
        </Button>
    }
>

    <Table
        columns={columns}
        data={clients}
    />

</TableCard>
```

---

## Design Guidelines

* Use concise headings.
* Keep subtitles short and informative.
* Use the action area for secondary actions such as **View All**, **Export**, or **Filter**.
* Avoid placing forms or unrelated content inside a `TableCard`.
* Prefer the reusable `Table` component for displaying tabular data.

---

## Accessibility

* Uses semantic heading elements.
* Supports standard HTML attributes.
* Compatible with keyboard navigation provided by the child table component.

---

## Related Components

* Card
* Table
* ChartCard
* StatCard
* PageHeader

---

## Future Enhancements

Potential improvements include:

* Loading state
* Empty state
* Pagination footer
* Sticky header support
* Virtualized table integration
* Export actions

---

## Version

Current Version: **1.0.0**
