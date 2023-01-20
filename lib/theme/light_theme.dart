import 'package:flutter/material.dart';

ThemeData light = ThemeData(
  fontFamily: 'Roboto',
  primaryColor: Color(0xFF26A69A),
  secondaryHeaderColor: Color(0xFF00BFA5),
  disabledColor: Color(0xFFBABFC4),
  backgroundColor: Color(0xFFF3F3F3),
  errorColor: Color(0xFFE84D4F),
  brightness: Brightness.light,
  hintColor: Color(0xFF9F9F9F),
  cardColor: Colors.white,
  colorScheme: ColorScheme.light(primary: Color(0xFF26A69A), secondary: Color(0xFF00BFA5)),
  textButtonTheme: TextButtonThemeData(style: TextButton.styleFrom(primary: Color(0xFF26A69A))),
);