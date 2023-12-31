<template>
  <div class="reservationImg">
    <h1>線上訂位</h1>
  </div>
  <v-container>
    <v-row class="reservationRow">
      <v-col class="text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
        <p>您可以透過電話或網路平台預約</p>
        <p>請您填寫完整的資訊，送出之後將有專人聯絡您，確認後將會在『會員資料』中的「我的訂位」顯示訂位成功。</p>
        <p>店內還有包廂可做預訂，若有需要請電洽 02 2703 7507</p>
      </v-col>
      <v-col>
        <v-sheet width="70%" class="mx-auto reservationForm">
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField v-model="name.value.value" :error-messages="name.errorMessage.value" label="姓名" counter
              maxlength="20"></VTextField>
            <VTextField v-model="phoneNumber.value.value" :error-messages="phoneNumber.errorMessage.value" label="手機號碼">
            </VTextField>
            <v-select v-model="peopleNumber.value.value" :error-messages="peopleNumber.errorMessage.value" label="人數"
              :items="peopleNumberOptions"></v-select>
            <vue-date-picker v-model="dateTime.value.value" :error-messages="dateTime.errorMessage.value" label="日期 & 時間"
              placeholder="日期 & 時間" dark time-picker-inline :min-time="{ hours: 18, minutes: 0 }" reverse-years
              :year-range="[2023, 2030]" :max-time="{ hours: 24, minutes: 0 }" :start-time="startTime"
              :format-locale="zhTW"></vue-date-picker>
            <div class="text-center mt-4 mb-4">
              <VBtn type="submit" color="green-darken-3">送出</VBtn>
            </div>
          </VForm>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { zhTW } from 'date-fns/locale'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  name: yup
    .string()
    .required('姓名必填'),
  phoneNumber:
    yup.string().required('手機號碼必填').matches(/^09\d{8}$/, '手機格式錯誤'),
  peopleNumber: yup.number().required('人數必填'),
  dateTime: yup.string().required('日期、時間必填')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const name = useField('name')
const phoneNumber = useField('phoneNumber')
const peopleNumber = useField('peopleNumber')
const dateTime = useField('dateTime')

const submit = handleSubmit(async (values) => {
  try {
    await apiAuth.post('/reservation', {
      name: values.name,
      phoneNumber: values.phoneNumber,
      peopleNumber: values.peopleNumber,
      dateTime: values.dateTime
    })
    createSnackbar({
      text: '訂位成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green-darken-3',
        location: 'bottom'
      }
    })
    router.push('/userReservation')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

const peopleNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const startTime = ref({ hours: 18, minutes: 0 })

AOS.init()

</script>
