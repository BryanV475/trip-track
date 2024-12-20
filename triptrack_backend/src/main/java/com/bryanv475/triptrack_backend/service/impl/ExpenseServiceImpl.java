package com.bryanv475.triptrack_backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bryanv475.triptrack_backend.enums.ExpenseStatus;
import com.bryanv475.triptrack_backend.model.Expense;
import com.bryanv475.triptrack_backend.repository.ExpenseRepository;
import com.bryanv475.triptrack_backend.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public List<Expense> getExpensesByStatus(ExpenseStatus status) {
        return expenseRepository.findByStatus(status);
    }

    @Override
    public List<Expense> getExpensesByAuthor(String author) {
        return expenseRepository.findByAuthorId(author);
    }

    @Override
    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    @Override
    public Expense createExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public Expense updateExpense(Expense expense) {
        if (!expenseRepository.existsById(expense.getId())) {
            throw new IllegalArgumentException("Expense not found");
        }
        return expenseRepository.save(expense);
    }

    @Override
    public void deleteExpense(Long id) {
        if (!expenseRepository.existsById(id)) {
            throw new IllegalArgumentException("Expense not found");
        }
        expenseRepository.deleteById(id);
    }

}
