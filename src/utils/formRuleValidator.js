let FormRuleValidator = {
  install(vue) {
    vue.prototype.formRuleValidator = FormRuleValidator
  },
  // 身份证
  isIdNumber(value) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
  },
  isIp(ip) {
    return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(ip)
  },
  isInnerIp(ip) {
    //檢查是否是內部 IP
    //1.A類地址中:10.0.0.0到10.255.255.255.255
    //2.B類地址中:172.16.0.0到172.31.255.255
    //3.C類地址中:192.168.0.0到192.168.255.255

    let address = ip.split('\.');

    if (ip == "127.0.0.1" || ip == "localhost") {
      return true;
    }

    if (address[0] == "10") {
      return true
    }

    if (address[0] == "192" && address[1] == "168") {
      return true;
    }

    if (address[0] == "172") {
      let num = parseInt(address[1]);
      if (num >= 16 && num <= 31) {
        return true;
      }
    }

    return false
  },
  // 纯粹的整数
  isInteger(value) {
    return /^\d+$/.test(value)
  },
  // 默认是>= 0
  isValidNumber(value, pattern = /^(([1-9]{1}\d*)|(\d{1}))(\.\d+)?$/) {
    return pattern.test(value)
  },
  isPositiveInteger(value, pattern = /^([1-9]\d*)$/) {
    return pattern.test(value)
  },
  // 检测网址
  isWebsiteUrl(value) {
    return /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+/.test(value)
  },
  // 校验银行账户
  isBankAccount(value) {
    return /^[1-9]{1}(\d{15,18})$/.test(value)
  },
  // 校验手机号
  isMobile(value) {
    return /^1\d{10}$/.test(value)
  },
  // 校验座机
  isPhone(value) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value)
  },
  isEmail(value) {
    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)
  },
  // 校验邮编
  isZipCode(value) {
    return /^[1-9]\d{5}$/.test(value)
  },
  // 校验车牌号
  isCarNumber(value) {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-Z0-9]{4}[A-Z0-9挂学警港澳]$/.test(value)
  },
  // 格式化字符串
  formatStrWithSplit({ value, splitNumber = 4, splitCharacter = ' ' }) {
    value = value && value.trim() || ''
    // 去空格
    value = value.replace(/\s/g, '')

    let length = value.length,
        result = ''
    for (let i = 0; i < length; i++) {
      result += value[i]
      if ((i + 1) % splitNumber == 0 && i < length - 1) {
        result += splitCharacter
      }
    }
    return result
  },
  Validator: {

    /* 将对应的字段转成字符串，避免表单有默认值时，blur异常 */
    getRequiredRule(required = true, message = '必填项', trigger = 'blur') {
      let rules = []
      if (required) {
        rules.push({
          required,
          message,
          trigger
        })
      }

      return rules
    },
    getInputNumberdRule(required = true, message = '请输入数字', trigger = 'blur', reg = /^(([1-9]{1}\d*)|(\d{1}))(\.\d+)?$/) {
      let rules = []
      if (required) {
        rules.push({
          required,
          message: '必填项',
          trigger
        })
      }

      rules.push({
        type: 'number',
        transform(value) {
          if (!value && value != 0) {
            return ''
          } else if (FormRuleValidator.isValidNumber(value, reg)) {
            return 1
          } else {
            return ''
          }
        },
        message,
        trigger
      })

      return rules
    },
    getIntegerRule(required = true, message = '请输入数字', trigger = 'blur') {
      let rules = []
      if (required) {
        rules.push({
          required,
          message: '必填项',
          trigger
        })
      }

      rules.push({
        type: 'number',
        transform(value) {
          if (!value && value != 0) {
            return ''
          } else if (FormRuleValidator.isInteger(value)) {
            return 1
          } else {
            return ''
          }
        },
        message,
        trigger
      })

      return rules
    },
    // 正整数校验规则
    getPositiveIntegerRule(required = true, reg) {
      let rules = []
      if (required) {
        rules.push({
          required,
          type: 'number',
          message: '必填项',
          trigger: 'blur'
        })
      }

      rules.push({
        type: 'number',
        transform(value) {
          if (!value && value != 0) {
            return ''
          } else if (FormRuleValidator.isPositiveInteger(value, reg)) {
            return 1
          } else {
            return ''
          }
        },
        message: '数字不合法',
        trigger: 'blur'
      })

      return rules
    },
    // 数字规则
    getValidNumberRule(required = false, reg, message = '数字不合法') {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'number',
        transform(value) {
          if (!value && value != 0) {
            return ''
          } else if (FormRuleValidator.isValidNumber(value, reg)) {
            return 1
          } else {
            return false
          }
        },
        message,
        trigger: 'blur'
      })

      return rules
    },
    getDateRule(required = true, message = '必选项', trigger = 'change') {
      let rules = []
      if (required) {
        rules.push({
          required,
          type: 'date',
          message,
          trigger
        })
      }

      return rules
    },
    getDateRangeRule() {
      return {
        type: 'array',
        required: true,
        message: '必填项',
        fields: {
          0: { type: 'string', required: true, message: '请输入起始日期' },
          1: { type: 'string', required: true, message: '请输入结束日期' }
        }
      }
    },
    // 座机校验规则
    getPhoneRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '座机号不合法',
        transform(value) {
          // 空字符串也能通过，因为第一条验证规则已经加了required
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isPhone(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 手机校验规则
    getMobileRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '手机号不合法',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isMobile(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 手机或者座机校验规则
    getPhoneOrMobileRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '手机号或者座机号不合法',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isMobile(value) || FormRuleValidator.isPhone(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    getEmailRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '邮箱不合法',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isEmail(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 邮编规则
    getZipCodeRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '邮编不合法',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isZipCode(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 银行账户
    getBankAccountRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isBankAccount(value)) {
            return value
          } else {
            return false
          }
        },
        message: '银行账号不合法',
        trigger: 'blur'
      })

      return rules
    },
    // 网站地址规则
    getWebsiteUrlRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '请输入合法的网站地址',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isWebsiteUrl(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 身份证规则
    getIdNumberRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        message: '请输入合法的身份证号',
        transform(value) {
          if (!value || !value.trim()) {
            return ''
          } else if (FormRuleValidator.isIdNumber(value)) {
            return value
          } else {
            return false
          }
        },
        trigger: 'blur'
      })

      return rules
    },
    // 车牌号校验规则
    getCarNumberRule(required = false) {
      let rules = FormRuleValidator.Validator.getRequiredRule(required)
      rules.push({
        type: 'string',
        transform(value) {
          if (!value) {
            return ''
          } else if (FormRuleValidator.isCarNumber(value)) {
            return 1
          } else {
            return false
          }
        },
        message: '车牌号不合法',
        trigger: 'blur'
      })

      return rules
    },
    // 针对Select标签
    getSelectRule(required = true, message = '请选择', type = 'number') {
      let rules = []
      if (required) {
        rules.push({
          required,
          type,
          message
        })
      }

      rules.push({
        type,
        transform(value) {
          if (type == 'number') {
            if (value == -1) {
              return ''
            } else {
              return 1
            }
          } else if (type == 'string') {
            if (!value) {
              return ''
            } else {
              '1'
            }
          }
        },
        message,
        trigger: 'change'
      })

      return rules
    },
    // 针对Radio标签
    getRadioRule(required = true, message = '请选择', type = 'number') {
      let rules = []
      if (required) {
        rules.push({
          required,
          type,
          message,
          trigger: 'change'
        })
      }

      return rules
    },
    getIpRule(required = true, message = '必填项', trigger = 'blur') {
      let rules = []
      if (required) {
        rules.push({
          required,
          message,
          trigger
        })
      }

      rules.push({
        transform(value) {
          if (!value) {
            return '1'
          } else if (FormRuleValidator.isIp(value)) {
            return '1'
          } else {
            return 1
          }
        },
        message: '请填写正确格式的IP',
        trigger
      })

      return rules
    },
    // 判断外网ip
    getOutSideIpRule(required = true, message = '必填项', trigger = 'blur') {
      let rules = []
      if (required) {
        rules.push({
          required,
          message,
          trigger
        })
      }

      rules.push({
        transform(value) {
          if (!value) {
            return '1'
          } else if (FormRuleValidator.isIp(value) && !FormRuleValidator.isInnerIp(value)) {
            return '1'
          } else {
            return 1
          }
        },
        message: '请填写正确格式的外网IP',
        trigger
      })

      return rules
    }
  }
}

export default FormRuleValidator
