package users

import (
	// paypalSdk "github.com/logpacker/PayPal-Go-SDK"
	"encoding/hex"
	"encoding/json"
	"strconv"

	paypal "github.com/logpacker/PayPal-Go-SDK"
)

var (
	persona string = ""
)

type (
	Create_User struct {
		Name     string
		Fname    string
		Madam    bool
		Address  string // World Coodinates
		Address2 string // local coodinates
		Zip      string
		City     string
		Country  string
		Email    string
		Password string
		Secure   bool
	}
	DigialProfile struct {

		// ledger my data
		Public  string
		Private string

		// visitor profile
		Name     string
		FName    string
		Email    string
		Address  string
		LAddress string
		City     string
		Zip      string
		Country  string
		Phone    string
		Twitter  string

		// credit card details
		Number      string
		ExpireMonth string
		ExpireYear  string
		Type        string
	}

	Vistors struct {
		Id       string `json:"Id"`
		Name     string `json:"Name"`
		Email    string `json:"Email"`
		Password string `json:"Password"`
		FName    string `json:"FName"`
		City     string `json:"City"`
		Zip      string `json:"Zip"`
		Address  string `json:"Address"`
		LAddress string `json:"LAddress"`
		Country  string `json:"Country"`
		Eve      bool   `json:"Eve"`
	}

	CreditCardInfo interface {
		SetAuthorizeStoreID(id string)
		GetAuthorizeStoreID() string
		VoidStruct() *DigialProfile
	}

	DigitalPrint struct{}

	UpdateProfile struct {
		Id           string
		FirstName    string
		LastName     string
		Phone        string
		HouseAddress string
		SubAddress   string
		Country      string
		Zip          string
		Male         bool
		Email        string
		Twitter      string
		City         string
	}
)

func NewClient() CreditCardInfo {
	return &DigitalPrint{}
}

func (*DigitalPrint) SetAuthorizeStoreID(id string) {
	persona = id
}

func (*DigitalPrint) GetAuthorizeStoreID() string {
	return persona
}

func (*DigitalPrint) VoidStruct() *DigialProfile {
	return &DigialProfile{
		Public:      "",
		Private:     "",
		Name:        "",
		FName:       "",
		Email:       "",
		Address:     "",
		LAddress:    "",
		City:        "",
		Zip:         "",
		Country:     "",
		Phone:       "",
		Twitter:     "",
		Number:      "",
		ExpireMonth: "",
		ExpireYear:  "",
		Type:        "",
	}
}

type CalculationInterface interface {
	CalculateTotalBalance(st1, str2 float64) float64
	CalculateNum(str string) (float64, error)
	MarshalJson(pay paypal.PayoutResponse) ([]byte, error)
	MarshalJsonFees(pay *paypal.PaymentResponse) ([]byte, error)
	Encode(encode []byte) string
}

func (*Analysis) MarshalJSONAmount(pay *paypal.PayoutResponse) ([]byte, error) {

	return json.Marshal(pay.BatchHeader.Amount)
}

func (*Analysis) MarshalJSONFees(pay *paypal.PayoutResponse) ([]byte, error) {
	return json.Marshal(pay.BatchHeader.Fees)
}

func (*Analysis) Encode(encode []byte) string {

	return hex.EncodeToString(encode)
}

func (*Analysis) CalculateNum(str string) (float64, error) {

	return strconv.ParseFloat(str, 10)
}

func (*Analysis) CalculateTotalBalance(str1, str2 float64) float64 {
	return str1 + str2
}

type Analysis struct{}
