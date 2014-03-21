angular.module('openproject.workPackages.config')

.constant('INITIALLY_SELECTED_COLUMNS', ["id", "subject"])

.constant('OPERATORS_AND_LABELS_BY_FILTER_TYPE', {
  list: {"=":"is","!":"is not"},
  list_model: {"=":"is","!":"is not"},
  list_status: {"o":"open","=":"is","!":"is not","c":"closed","*":"all"}, // TODO RS: Need a generalised solution
  list_optional: {"=":"is","!":"is not","!*":"none","*":"all"},
  list_subprojects: {"*":"all","!*":"none","=":"is"},
  date: {"<t+":"in less than",">t+":"in more than","t+":"in","t":"today","w":"this week",">t-":"less than days ago","<t-":"more than days ago","t-":"days ago"},
  date_past: {">t-":"less than days ago","<t-":"more than days ago","t-":"days ago","t":"today","w":"this week"},
  string: {"=":"is","~":"contains","!":"is not","!~":"doesn't contain"},
  text: {"~":"contains","!~":"doesn't contain"},
  integer: {"=":"is",">=":">=","<=":"<=","!*":"none","*":"all"}
})

.constant('AVAILABLE_WORK_PACKAGE_FILTERS', {
  status_id: { type: 'list_model', modelName: 'status' , order: 1, name: 'Status' },
  type_id: { type: 'list_model', modelName: 'type', order: 2, name: 'Type' },
  priority_id: { type: 'list_model', modelName: 'priority', order: 3, name: 'Priority'},
  assigned_to_id: { type: 'list_model', modelName: 'user' , order: 4, name: 'Assigned to' },
  author_id: { type: 'list_model', modelName: 'user' , order: 4, name: 'Author' },
  subject: { type: 'text', 'order':8, name: 'Subject' },
  created_at: { type: 'date_past', 'order':9, name: 'Created on' },
  updated_at: { type: 'date_past', 'order':10, name: 'Updated on' },
  start_date: { type: 'date', 'order': 11, name: 'Start date' },
  due_date: { type: 'date', 'order': 12, name: 'Due date' },
  estimated_hours: { type: 'integer', 'order': 13, name: 'Estimated time' },
  done_ratio: { type: 'integer', 'order': 14, name: '% done' },
  // member_of_group: {type: 'list_optional','order':6,'values':[['Gruppe 00001','138'],['Gruppe 00002','139'],['Gruppe 00003','140'],['Gruppe 00004','141'],['Gruppe 00005','142']],name: 'Assignee's group'},
  // assigned_to_role: {type: 'list_optional','order':7,'values':[['Project Admin','3'],['Release Manager','19'],['Project Member','4'],['Stakeholder','5'],['Controller Client','6'],['Controller','8'],['Developer','9'],['Tester','10'],['Reader','11'],['Timeline Reader','20']],name: 'Assignee's role'},
  // responsible_id: {type: 'list_optional','order':4,'values':[['<< me >>','me'],['Gianni Ward','133'],['PTU Administrator','113'],['Reece Hegmann','122']],name: 'Responsible'},'watcher_id':{type: 'list','order':15,'values':[['<< me >>','me'],['Gianni Ward','133'],['PTU Administrator','113'],['Reece Hegmann','122']],name: 'Watcher'},
  // fixed_version_id: {type: 'list_optional','order':7,'values':[['HD Bridge - Version 00001.0','19'],['HD Bridge - Version 00002.0','20']],name: 'Target version'},'cf_4':{type: 'list_optional','values':['Client 1','Client 2'],'order':20,name: 'Client'}
})

.constant('DEFAULT_SORT_CRITERIA', "parent:desc")

.constant('DEFAULT_QUERY', {
  display_sums: false,
  // filters: [{ status_id: {"operator":"o","values":[""], name: "status_id" }}],
  group_by: null
})

.constant('DEFAULT_PAGINATION_OPTIONS', {
  page: 1,
  perPage: 10,
  perPageOptions: [10, 20, 50, 100, 500, 1000]
});
