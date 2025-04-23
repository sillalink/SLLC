"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/app/shared/ui/Table";
import { Input } from "@/app/shared/ui/input";
import Button from "@/app/shared/ui/Button";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import { EmployeeForm } from "./EmployeeFrom";
import { Employee, EmployeeFormData, EmployeeTableProps } from "@/app/types";
import { EmptyState } from "./EmptyState";
import { Avatar } from "./Avatar";
import { Badge } from "@/app/shared/ui/badge";
import { formatDate } from "@/app/lib/date";

export const EmployeeTable = ({
  employees = [],
  onAdd,
  onUpdate,
  onDelete,
  isLoading = false,
  error = null,
}: EmployeeTableProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [departmentFilter, setDepartmentFilter] =
    React.useState<string>("All Departments");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [currentEmployee, setCurrentEmployee] = React.useState<Employee | null>(
    null
  );

  // Get unique departments for filter
  const departments = React.useMemo(() => {
    const depts = new Set(employees.map((emp) => emp.department));
    return ["All Departments", ...Array.from(depts)];
  }, [employees]);

  // Filter employees based on search and department
  const filteredEmployees = React.useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        departmentFilter === "All Departments" ||
        employee.department === departmentFilter;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, departmentFilter]);

  const handleEditClick = (employee: Employee) => {
    setCurrentEmployee(employee);
    setIsDialogOpen(true);
  };

  const handleAddClick = () => {
    setCurrentEmployee(null);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = (employee: EmployeeFormData) => {
    if (currentEmployee) {
      onUpdate(currentEmployee.id, employee);
    } else {
      onAdd(employee);
    }
    setIsDialogOpen(false);
  };

  if (error) {
    return (
      <EmptyState
        title="Error loading employees"
        description={error}
        icon="error"
      />
    );
  }

  if (isLoading) {
    return (
      <EmptyState
        title="Loading employees..."
        description="Please wait while we fetch your data"
        icon="loading"
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Employee Management
          </h1>
          <p className="text-gray-500">
            {employees.length}{" "}
            {employees.length === 1 ? "employee" : "employees"} total
          </p>
        </div>
        <Button
          onClick={handleAddClick}
          variant="primary"
          className="shadow-sm"
        >
          <FiPlus className="mr-2" />
          Add Employee
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-xs">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="relative  flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search employees..."
              className="pl-10 bg-white w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 w-full md:w-48 border border-gray-200 rounded-md focus:border-blue-300 focus:ring-2 focus:ring-blue-100 bg-white text-gray-700 text-sm"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-xs overflow-hidden">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </TableHead>
              <TableHead className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar name={employee.name} className="mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-primary text-gray-100" variant="destructive">{employee.position}</Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.department}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(employee.joinDate)}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        onClick={() => handleEditClick(employee)}
                        aria-label="Edit employee"
                      >
                        <FiEdit2 className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => onDelete(employee.id)}
                        aria-label="Delete employee"
                      >
                        <FiTrash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="px-6 py-12">
                  <EmptyState
                    title="No employees found"
                    description="Try adjusting your search or filters"
                    icon="search"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Employee Form Dialog */}
      <EmployeeForm
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        employee={currentEmployee}
        onSubmit={(employeeData) => {
          if (currentEmployee) {
            onUpdate(currentEmployee.id, employeeData);
          } else {
            onAdd(employeeData);
          }
        }}
      />
    </div>
  );
};
