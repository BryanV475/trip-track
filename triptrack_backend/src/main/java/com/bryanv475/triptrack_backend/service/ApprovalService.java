package com.bryanv475.triptrack_backend.service;

import java.util.Optional;

import com.bryanv475.triptrack_backend.model.Approval;

public interface ApprovalService {

    Optional<Approval> getApprovalById(Long id);

    Optional<Approval> getApprovalByExpenseId(Long expenseId);

    Approval createApproval(Approval approval);

    Optional<Approval> createApprovalForExpense(Long expenseId, Approval approval);

}
