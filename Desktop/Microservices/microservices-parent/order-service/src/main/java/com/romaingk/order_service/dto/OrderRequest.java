package com.romaingk.order_service.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class OrderRequest {

    private List<OrderLineItemsDto> orderlineItemsDtoList;
}
