const message = {
    EMAIL_ALREADY_REGISTERED: 'This email is already been registered',
    REGISTRATION_SUCCESSFUL: 'Registration Successful',
    USER_NOT_REGISTER: 'User not registered',
    INVALID_CREDENTIALS: 'Usermame and Password Invalid',
    USER_LOGIN_SUCCESSFULLY: 'User login successfully',
    CAR_DETAIL_ALREADY_STORED: 'This car details are already been stored',
    CAR_DEATIL_STORED_SUCCESSFULLY: 'Car detail succesfully stored',
    REFRESH_TOKEN_NOT_FOUND: 'Refresh token not found',
    TOKEN_GENERATED_SUCCESSFULY: 'Token Generated Successfuy',
    PLEASE_SELECT_IMAGE: 'Please select image',
    PLEASE_SELECT_PRIMARY_CAR_IMAGE: 'Please select primary car image',
};

const getMessage = (key)=>{
    if(message[key]) return message[key];
    return 'Message key not found';
}

module.exports = getMessage;