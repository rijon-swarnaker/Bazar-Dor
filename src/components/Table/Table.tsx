import {
  TableRow,
  TableCell,
} from "@heroui/react";

interface TablePageProps {
  t: {
    market: string;
    division: string;
    min: number;
    max: number;
  };
}

export function TablePage({ t }: TablePageProps) {
  const avg = (t.min + t.max) / 2;

  return (
    <TableRow>
      <TableCell>{t.market}</TableCell>
      <TableCell>{t.division}</TableCell>
      <TableCell>{t.min} টাকা</TableCell>
      <TableCell>{t.max} টাকা</TableCell>
      <TableCell className="font-bold">
        {Math.round(avg)} টাকা
      </TableCell>
    </TableRow>
  );
}