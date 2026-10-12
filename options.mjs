// 独立教学示例，只处理两个布尔配置项。
export function validateOptions(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new TypeError('需要配置对象');
  const allowed = ['chatDisabled', 'showStats'];
  for (const key of Object.keys(input)) {
    if (!allowed.includes(key)) throw new Error('未知配置字段');
    if (typeof input[key] !== 'boolean') throw new TypeError('字段必须为布尔值');
  }
  for (const key of allowed) {
    if (!Object.hasOwn(input, key)) throw new Error('缺少配置字段');
  }
  return {chatDisabled:input.chatDisabled, showStats:input.showStats};
}
