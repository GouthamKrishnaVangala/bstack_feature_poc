var base64 = require('base-64'),
utf8 = require('utf8'),


// var encoded = 'PHAgYWxpZ249ImNlbnRlciI+CiAgPGEgaHJlZj0iaHR0cHM6Ly9zdG9yZS5tb3NhaXEub25lLyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICA8aW1nIGFsdD0ibW9zYWlxIiBzcmM9Imh0dHBzOi8vbW9zYWlxLWlkZS10ZXN0LWF1dG9tYXRpb24uczMuYW1hem9uYXdzLmNvbS9pZGUtdGVzdC1hdXRvbWF0aW9uL3JlcG9ydHMvYmFkZ2UvbW9zYWlxLXN0b3JlLWxvZ28ucG5nIiB3aWR0aD0iMTUwIj4KICA8L2E+CjwvcD4KCiMgTW9zYWlxIElERSBUZXN0IEF1dG9tYXRpb24gU3RhdHVzCjxwIGFsaWduPSJjZW50ZXIiPgogIDxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9tb3NhaXFvbmUvaWRlLXRlc3QtYXV0b21hdGlvbi9hY3Rpb25zP3F1ZXJ5PXdvcmtmbG93JTNBbW9zYWlxLWlkZS10ZXN0LWF1dG9tYXRpb24iPgogICAgPGltZyBhbHQ9Ik92ZXJhbGwgVGVzdCBBdXRvbWF0aW9uIFN0YXR1cyIgc3JjPSJodHRwczovL2dpdGh1Yi5jb20vbW9zYWlxb25lL2lkZS10ZXN0LWF1dG9tYXRpb24vd29ya2Zsb3dzL21vc2FpcS1pZGUtdGVzdC1hdXRvbWF0aW9uL2JhZGdlLnN2ZyI+PC9hPgoKICA8YSBocmVmPSJodHRwczovL21vc2FpcS1pZGUtdGVzdC1hdXRvbWF0aW9uLnMzLmFtYXpvbmF3cy5jb20vaWRlLXRlc3QtYXV0b21hdGlvbi9yZXBvcnRzL2FsbHVyZS1yZXBvcnQvaW5kZXguaHRtbCIgdGFyZ2V0PSJfYmxhbmsiPgogICAgPGltZyBhbHQ9IkZ1bmN0aW9uYWwgVGVzdCBTdGF0dXMiIHNyYz0iaHR0cHM6Ly9tb3NhaXEtaWRlLXRlc3QtYXV0b21hdGlvbi5zMy5hbWF6b25hd3MuY29tL2lkZS10ZXN0LWF1dG9tYXRpb24vcmVwb3J0cy9iYWRnZS9mdW5jdGlvbmFsVGVzdC5zdmciPjwvYT4KCiAgPGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL21vc2FpcW9uZS9pZGUtdGVzdC1hdXRvbWF0aW9uIj4KICAgIDxpbWcgYWx0PSJQZXJmb3JtYW5jZSBUZXN0IFN0YXR1cyIgc3JjPSJodHRwczovL21vc2FpcS1pZGUtdGVzdC1hdXRvbWF0aW9uLnMzLmFtYXpvbmF3cy5jb20vaWRlLXRlc3QtYXV0b21hdGlvbi9yZXBvcnRzL2JhZGdlL3BlcmZvcm1hbmNlVGVzdC5zdmciPjwvYT4KCiAgPGEgaHJlZj0iaHR0cHM6Ly9tb3NhaXEtaWRlLXRlc3QtYXV0b21hdGlvbi5zMy5hbWF6b25hd3MuY29tL2lkZS10ZXN0LWF1dG9tYXRpb24vcmVwb3J0cy91aVJlcG9ydHMvcmVwb3J0Lmh0bWwiPgogICAgPGltZyBhbHQ9IlVpIFJlc3BvbnNpdmVuZXNzIFRlc3QgU3RhdHVzIiBzcmM9Imh0dHBzOi8vbW9zYWlxLWlkZS10ZXN0LWF1dG9tYXRpb24uczMuYW1hem9uYXdzLmNvbS9pZGUtdGVzdC1hdXRvbWF0aW9uL3JlcG9ydHMvYmFkZ2UvVWlSZXNwb25zaXZlVGVzdC5zdmciPjwvYT4KPC9wPg==';
// var bytes = base64.decode(encoded);
// var text = utf8.decode(bytes);
// console.log(text);

 
// localStorage.setItem("jiraEncoded", jiraEncoded);

var user = 'This is test message';
var bytes1 = utf8.encode(user); 
var username = base64.encode(bytes1);
console.log(username)
