// src/app/employees/page.tsx
"use client";

import { useState, useEffect } from "react";
import type { Employee, EmployeeFormData } from "@/app/types";
// import { toast } from "react-hot-toast";
import { mockEmployees } from "@/app/lib/employees";
import { EmployeeTable } from './../admin_components/Employees/EmployeeTable';

// Mock API delay (simulate network latency)
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 500));

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load mock data on mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await simulateNetworkDelay(); // Simulate API delay
        
        // Use mock data instead of API call
        setEmployees([...mockEmployees]);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
        setError("Failed to load employees");
        // toast.error("Failed to load employees");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleAdd = async (employee: EmployeeFormData) => {
    try {
      setIsLoading(true);
      await simulateNetworkDelay();
      
      const newEmployee = {
        ...employee,
        id: Date.now().toString(), // Generate unique ID
      };
      
      setEmployees(prev => [...prev, newEmployee]);
      // toast.success("Employee added successfully");
    } catch (err) {
      console.error("Failed to add employee:", err);
      // toast.error("Failed to add employee");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id: string, employee: EmployeeFormData) => {
    try {
      setIsLoading(true);
      await simulateNetworkDelay();
      
      setEmployees(prev => 
        prev.map(emp => emp.id === id ? { ...employee, id } : emp)
      );
      // toast.success("Employee updated successfully");
    } catch (err) {
      console.error("Failed to update employee:", err);
      // toast.error("Failed to update employee");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      await simulateNetworkDelay();
      
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      // toast.success("Employee deleted successfully");
    } catch (err) {
      console.error("Failed to delete employee:", err);
      // toast.error("Failed to delete employee");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container bg-gray-100 mx-auto py-8 px-4">
      <div className="container mx-auto">
        <EmployeeTable
          employees={employees}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default EmployeesPage;