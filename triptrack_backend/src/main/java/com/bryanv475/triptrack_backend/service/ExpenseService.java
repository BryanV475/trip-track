package com.bryanv475.triptrack_backend.service;

import java.util.List;
import java.util.Optional;

import com.bryanv475.triptrack_backend.enums.ExpenseStatus;
import com.bryanv475.triptrack_backend.model.Expense;

public interface ExpenseService {

    List<Expense> getAllExpenses();
    
    List<Expense> getExpensesByStatus(ExpenseStatus status);

    List<Expense> getExpensesByAuthor(String author);

    Optional<Expense> getExpenseById(Long id);

    Expense createExpense(Expense expense);

    Expense updateExpense(Expense expense);

    void deleteExpense(Long id);

}
