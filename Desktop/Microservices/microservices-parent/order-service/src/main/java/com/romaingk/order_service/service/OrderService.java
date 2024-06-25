package com.romaingk.order_service.service;

import com.romaingk.order_service.dto.OrderLineItemsDto;
import com.romaingk.order_service.dto.OrderRequest;
import com.romaingk.order_service.model.Order;
import com.romaingk.order_service.model.OrderLineItems;
import com.romaingk.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j

public class OrderService {

    private final OrderRepository repository;

    @Transactional
    public void placeOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());

        List<OrderLineItems> orderLineItems = null;
        if (orderRequest.getOrderlineItemsDtoList() != null) {
            orderLineItems = orderRequest.getOrderlineItemsDtoList()
                    .stream()
                    .map(this::mapToEntity)
                    .toList();
        } else {

        }

        order.setOrderLineItems(orderLineItems);

        repository.save(order);
    }

    private OrderLineItems mapToEntity(OrderLineItemsDto orderlineItemsDto) {
        OrderLineItems orderLineItems = new OrderLineItems();
        orderLineItems.setSkuCode(orderlineItemsDto.getSkuCode());
        orderLineItems.setPrice(orderlineItemsDto.getPrice());
        orderLineItems.setQuantity(orderlineItemsDto.getQuantity());

        return orderLineItems;
    }
}
