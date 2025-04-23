"use client";

import * as React from "react";
import Button  from "@/app/shared/ui/Button";
import { Input } from "@/app/shared/ui/input";
import { Label } from "@/app/shared/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/app/shared/ui/dialog";
import { Employee, EmployeeFormData } from "@/app/types";
import { FiX } from "react-icons/fi";

interface EmployeeFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee: Employee | null;
  onSubmit: (employee: EmployeeFormData) => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  open,
  onOpenChange,
  employee,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<EmployeeFormData>({
    name: "",
    email: "",
    position: "",
    department: "Engineering", // Default department
    joinDate: new Date().toISOString().split("T")[0],
  });

  // Reset form when employee changes or dialog opens/closes
  React.useEffect(() => {
    if (open) {
      setFormData(
        employee
          ? {
              name: employee.name,
              email: employee.email,
              position: employee.position,
              department: employee.department,
              joinDate: employee.joinDate,
            }
          : {
              name: "",
              email: "",
              position: "",
              department: "Engineering",
              joinDate: new Date().toISOString().split("T")[0],
            }
      );
    }
  }, [open, employee]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {employee ? "Edit Employee" : "Add New Employee"}
          </DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <FiX className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position" className="text-sm font-medium text-gray-700">
              Position
            </Label>
            <Input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Software Engineer"
              required
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department" className="text-sm font-medium text-gray-700">
              Department
            </Label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Operations">Operations</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="joinDate" className="text-sm font-medium text-gray-700">
              Join Date
            </Label>
            <Input
              id="joinDate"
              name="joinDate"
              type="date"
              value={formData.joinDate}
              onChange={handleChange}
              required
              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            >
              {employee ? "Update Employee" : "Add Employee"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};