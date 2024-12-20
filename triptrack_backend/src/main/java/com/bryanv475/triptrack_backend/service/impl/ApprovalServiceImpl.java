package com.bryanv475.triptrack_backend.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bryanv475.triptrack_backend.enums.ExpenseStatus;
import com.bryanv475.triptrack_backend.model.Approval;
import com.bryanv475.triptrack_backend.model.Expense;
import com.bryanv475.triptrack_backend.repository.ApprovalRepository;
import com.bryanv475.triptrack_backend.service.ApprovalService;
import com.bryanv475.triptrack_backend.service.ExpenseService;

@Service
public class ApprovalServiceImpl implements ApprovalService{

    @Autowired
    private ApprovalRepository approvalRepository;

    @Autowired
    private ExpenseService expenseService;

    @Override
    public Optional<Approval> getApprovalById(Long id) {
        return approvalRepository.findById(id);
    }

    @Override
    public Optional<Approval> getApprovalByExpenseId(Long expenseId) {
        return approvalRepository.findByExpenseId(expenseId);
    }

    @Override
    public Approval createApproval(Approval approval) {
        return approvalRepository.save(approval);
    }

    @Override
public Optional<Approval> createApprovalForExpense(Long expenseId, Approval approval) {
    Optional<Expense> expenseOpt = expenseService.getExpenseById(expenseId);

    if (expenseOpt.isPresent()) {
        Expense expense = expenseOpt.get();

        if (expense.getStatus() == ExpenseStatus.APPROVED) {
            throw new IllegalStateException("El viático ya está aprobado.");
        }

        expense.setStatus(ExpenseStatus.APPROVED);
        expenseService.updateExpense(expense);
        approval.setExpense(expense);

        return Optional.of(approvalRepository.save(approval));
    } else {
        return Optional.empty();
    }
}

}
