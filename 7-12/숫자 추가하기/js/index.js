var numbers = []
        var arrayTable = document.querySelector("#arrayTable");

        function addNumner() {
            var input = document.querySelector("#inputNumber");
            var inputValue = input.value.trim() //앞뒤 공백 제거 (입력된 값을 가져옴)
            var number = parseInt(inputValue); //입력된 값을 정수로 변환
            if (!isNaN(number)) {
                numbers.push(number); // 숫자를 배열에 추가
                showArray();
                input.value = "" //입력 필드를 초기화
                input.focus(); //입력 필드에 포커스
            }
            else {
                alert("유효한 숫자를 입력하세요.")
            }
        }
        function showArray() {
            var str = `<table><tr>`;
            for (var i = 0; i < numbers.length; i++) {
                str += `<td> ${numbers[i]} </td>`
            }
            str += `</tr></table>`;
            arrayTable.innerHTML = str;
        }
