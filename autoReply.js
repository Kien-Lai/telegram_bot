module.exports = autoReply = (currentState) => {
    let arrTextReply = [
        "Sông Thu Bồn với diện tích lưu vực rộng 10,350 km2, là một trong những sông nội địa có lưu vực lớn nhất Việt Nam.", 
        "Sông bắt nguồn từ khối núi Ngọc Linh thuộc huyện Đăk Glei, tỉnh Kon Tum và đổ ra biển tại cửa Đại, thành phố Hội An, tỉnh Quảng Nam, một nhánh chảy vào sông Vĩnh Điện để đổ nước vào sông Hàn, Đà Nẵng.",
        "Trước khi đổ ra biển tại cửa Đại, một phần nước của sông chảy vào sông Trường Giang để đổ ra vịnh An Hòa Tam Quang, huyện Núi Thành",
        "Sông Thu Bồn cùng với sông Vu Gia, hợp lưu tại Đại Lộc tạo thành hệ thống sông lớn có vai trò rất quan trọng đối với đời sống và tâm hồn người Quảng.",
        "Phần lớn diện tích lưu vực sông chảy trong địa phận Quảng Nam và thành phố Đà Nẵng, phần thượng nguồn một phần nằm trên đất Kon Tum và Quảng Ngãi.",
        "https://www.youtube.com/watch?v=F2EtBSGluzk",
        "https://www.youtube.com/watch?v=9VMBydKmhHo"
    ]
    let loopPeriod = arrTextReply.length;
    let timesUserSendMessage = currentState.timesUserSendMessage;
    currentState.timesUserSendMessage = (currentState.timesUserSendMessage+1)%loopPeriod;
    return arrTextReply[timesUserSendMessage];
}