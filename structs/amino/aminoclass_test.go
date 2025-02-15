package amino

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var properties = AminoClass{
	Symbol:      "",
	Name:        "",
	Polar:       false,
	Charge:      false,
	ChargeType:  "",
	TypeChain:   "",
	Hydrophobic: false,
	PKa:         0.0,
	CodonStart:  false,
	CodonEnd:    false,
	ID:          0,
}

func AminoTestRun(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Amino-Class Interface tests ")
}

var _ = Describe("Amino Class Empty tests ", func() {
	gene := []string{"G", "A", "U", "C"}
	Context("Amino test", func() {
		It("Amino Checmial Properties ", func() {
			Expect(properties.Bases(gene)).Should(BeEmpty())
		})
	})
})
