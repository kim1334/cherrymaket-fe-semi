const details = [
  {
    // 첫 번째 디테일 데이터
    "consumerInfo": {
      "name": "임유진",
      "contact": "010-7740-9322",
      "approveAt": "2023-12-15 12:51:00"
    },
    "amountInfo": {
      "totalAmount": 50000,
      "discount": 3440,
      "couponAmount": 5000,
      "rewardAmount": null,
      "deliveryFee": 2500,
      "method": "간편결제"
    },
    "shippingDetailsInfo": {
      "orderCode": "23452345642332323",
      "shippingStatus": "ORDER_RECEIVED",
      "recipient": "임유진",
      "recipientContact": "010-7740-9322",
      "zipCode": "02312",
      "address": "경상남도 진주시 북정99길",
      "addressDetail": "나나나빌딩 경비실",
      "place": null,
      "request": null
    },
    "goodsDetailsInfo": [
      {
        "goodsId": 33,
        "storageType": null,
        "goodsName": "오뚜기 맛있는 햇반이당",
        "quantity": 10,
        "price": 32000,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      },
      {
        "goodsId": 44,
        "storageType": null,
        "goodsName": "대패삼겹살 맛있는 거",
        "quantity": 5,
        "price": 69992,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      }
    ]
  },
  // 두 번째 디테일 데이터
  {
    "consumerInfo": {
      "name": "John Doe",
      "contact": "555-555-5555",
      "approveAt": "2023-12-16 14:30:00"
    },
    "amountInfo": {
      "totalAmount": 75000,
      "discount": 5000,
      "couponAmount": 6000,
      "rewardAmount": null,
      "deliveryFee": 3000,
      "method": "신용카드"
    },
    "shippingDetailsInfo": {
      "orderCode": "87654321987654321",
      "shippingStatus": "발송됨",
      "recipient": "John Doe",
      "recipientContact": "555-555-5555",
      "zipCode": "12345",
      "address": "123번지 메인 스트리트",
      "addressDetail": "아파트 4B",
      "place": null,
      "request": null
    },
    "goodsDetailsInfo": [
      {
        "goodsId": 55,
        "storageType": null,
        "goodsName": "상품1",
        "quantity": 8,
        "price": 0,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      },
      {
        "goodsId": 66,
        "storageType": null,
        "goodsName": "상품2",
        "quantity": 3,
        "price": 0,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      }
    ]
  },
  // 세 번째 디테일 데이터
  {
    "consumerInfo": {
      "name": "Jane Smith",
      "contact": "123-456-7890",
      "approveAt": "2023-12-17 10:15:00"
    },
    "amountInfo": {
      "totalAmount": 60000,
      "discount": 4000,
      "couponAmount": 5500,
      "rewardAmount": null,
      "deliveryFee": 2800,
      "method": "PayPal"
    },
    "shippingDetailsInfo": {
      "orderCode": "12345678901234567",
      "shippingStatus": "배송 완료",
      "recipient": "Jane Smith",
      "recipientContact": "123-456-7890",
      "zipCode": "56789",
      "address": "456 Elm Street",
      "addressDetail": "Unit 7C",
      "place": null,
      "request": null
    },
    "goodsDetailsInfo": [
      {
        "goodsId": 77,
        "storageType": null,
        "goodsName": "상품A",
        "quantity": 12,
        "price": 0,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      },
      {
        "goodsId": 88,
        "storageType": null,
        "goodsName": "상품B",
        "quantity": 6,
        "price": 0,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      }
    ]
  },
  // 네 번째 디테일 데이터
  {
    "consumerInfo": {
      "name": "Jane Smith",
      "contact": "123-456-7890",
      "approveAt": "2023-12-17 10:15:00"
    },
    "amountInfo": {
      "totalAmount": 60000,
      "discount": 4000,
      "couponAmount": 5500,
      "rewardAmount": null,
      "deliveryFee": 2800,
      "method": "PayPal"
    },
    "shippingDetailsInfo": {
      "orderCode": "98765432109876543",
      "shippingStatus": "배송 완료",
      "recipient": "Jane Smith",
      "recipientContact": "123-456-7890",
      "zipCode": "56789",
      "address": "456 Elm Street",
      "addressDetail": "Unit 7C",
      "place": null,
      "request": null
    },
    "goodsDetailsInfo": [
      {
        "goodsId": 77,
        "storageType": null,
        "goodsName": "상품C",
        "quantity": 12,
        "price": 0,
        "inventory": 0,
        "discountRate": null,
        "discountedPrice": null
      }
    ]
  }
];

export default details;
